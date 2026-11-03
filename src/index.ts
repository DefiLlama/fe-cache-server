import express, { Express, Request, Response } from 'express'
import dayjs from 'dayjs'
import cron from 'node-cron'
import cacache from 'cacache'
import path from 'path'
import fs from 'fs'
import os from 'os'
import rateLimit from 'express-rate-limit'

import { fetchChain } from '../frontend/src/components/ComparePage/chainFetcher'
import 'module-alias/register'
import fetch from 'node-fetch'
import cors from 'cors'
import { getProtocolData } from '../frontend/src/api/categories/protocols/getProtocolData'
import { chartExist, sleep, sluggify } from './utils'
import { fetchChartData } from './fetchChart'

global.fetch = fetch

const app: Express = express()

// The service sits behind one reverse proxy, so req.ip comes from the last
// X-Forwarded-For hop. Without this every caller shares the proxy's address
// and therefore a single rate-limit bucket.
app.set('trust proxy', 1)

// Rate limit: 60 requests/minute per IP for geckoId endpoints
// skipFailedRequests: true so 4xx/5xx responses don't count against quota
// CoinGecko counts ALL responses (including 4xx/5xx) toward rate limit
const coinGeckoRateLimit = rateLimit({
  windowMs: 60_000,
  max: 60,
  standardHeaders: 'draft-8', // Use latest RateLimit header draft
  legacyHeaders: false,
  skipFailedRequests: true, // Don't count 4xx/5xx against quota (CoinGecko counts all)
  // Note: skipFailedRequests counts then uncounts - race condition on slow requests
  // but acceptable for this public cache service
})

app.use('/cgchart', coinGeckoRateLimit)
app.use('/supply', coinGeckoRateLimit)

const cacheDir = path.join(os.tmpdir(), 'myapp-cache')
const cacheTTL = 60 * 60 * 24 // 24 hours
const CACHE_MAX_SIZE = 500 * 1024 * 1024 // 500 MB

if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true })
}

app.use(cors())

async function getCachedData(
    key: string,
    ttl: number = cacheTTL,
    fetchFunc: () => Promise<any>
): Promise<any> {
    try {
        const cached = await cacache.get.info(cacheDir, key)
        if (cached && (Date.now() - cached.time) / 1000 < ttl) {
            console.log(`Cache hit for key: ${key}`)
            const { data } = await cacache.get(cacheDir, key)
            return JSON.parse(data.toString())
        }
    } catch (error) {}

    const data = await fetchFunc()
    // Only cache successful responses
    await cacache.put(cacheDir, key, JSON.stringify(data))
    // Prune if cache grows beyond max size
    await enforceCacheSizeLimit()
    return data
}

// Calculate total cache size from cacache index and clear if over limit
async function enforceCacheSizeLimit() {
    const index = await cacache.ls(cacheDir)
    let totalSize = 0
    // cacache.ls() returns Record<string, CacheObject & { size: number }>
    // Each entry has: key, integrity, path, time, size, metadata
    for (const entry of Object.values(index) as Array<{ size: number }>) {
        totalSize += entry.size
    }
    if (totalSize > CACHE_MAX_SIZE) {
        console.log(`Cache size ${totalSize} exceeds limit ${CACHE_MAX_SIZE}, clearing`)
        await cacache.rm.all(cacheDir)
    }
}

// CoinGecko ID pattern: lowercase alphanumeric, dash, underscore, dot
// Must start with alphanumeric, max 100 chars
// Based on CoinGecko's actual ID format: ^[a-z0-9][a-z0-9._-]*$
const GECKO_ID_REGEX = /^[a-z0-9][a-z0-9._-]{0,99}$/

async function fetchJsonOk(url: string): Promise<any> {
    const response = await fetch(url)
    if (!response.ok) {
        // CoinGecko returns 429 with Retry-After header on rate limit
        // 4xx/5xx still count against rate limit per CoinGecko docs
        throw new Error(`HTTP ${response.status}`)
    }
    return response.json()
}

app.get('/cg_market_data', async (req: Request, res: Response) => {
    try {
        const results = await getCachedData(
            'cg_crypto_market_data',
            60 * 60,
            async () => {
                const [response, defiResponse] = await Promise.all([
                    fetchJsonOk(`https://pro-api.coingecko.com/api/v3/global?x_cg_pro_api_key=${process.env.CG_KEY}`),
                    fetchJsonOk(`https://pro-api.coingecko.com/api/v3/global/decentralized_finance_defi?x_cg_pro_api_key=${process.env.CG_KEY}`)
                ])
                return { ...response.data, ...defiResponse.data }
            }
        )
        res.send({ data: results })
    } catch (error) {
        res.status(500).json({
            error: 'Failed to fetch CoinGecko global data.',
        })
    }
})

app.get('/exchanges', async (req: Request, res: Response) => {
    try {
        const results = await getCachedData(
            'cg_exchanges_data',
            60 * 60,
            async () => {
                const response = await fetchJsonOk(`https://pro-api.coingecko.com/api/v3/exchanges?x_cg_pro_api_key=${process.env.CG_KEY}`)
                return response
            }
        )
        res.send({ data: results })
    } catch (error) {
        res.status(500).json({
            error: 'Failed to fetch CoinGecko exchanges data.',
        })
    }
})

const VALID_CHAIN_REGEX = /^[A-Za-z0-9 _-]{1,40}$/

app.get('/:chain', async (req: Request, res: Response) => {
    const chain = req.params.chain
    if (!VALID_CHAIN_REGEX.test(chain)) {
        return res.status(404).send({ error: 'Invalid chain.' })
    }
    try {
        const results = await getCachedData(
            `chain_${chain}`,
            60 * 60 * 24,
            async () => {
                return await fetchChain({ chain })
            }
        )
        res.send({ data: results })
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch chain data.' })
    }
})

app.get('/cgchart/:geckoId', async (req: Request, res: Response) => {
    try {
        const geckoId = req.params.geckoId
        if (!GECKO_ID_REGEX.test(geckoId)) {
          return res.status(400).send({ error: 'Invalid geckoId' })
        }
        const fullChart = req.query.fullChart === 'true'
        const cacheKey = `cgchart_${geckoId}${fullChart ? '_full' : ''}`
        const unixTimestampStartOfOneYearAgo = dayjs()
            .subtract(1, 'year')
            .startOf('day')
            .unix()

        const results = await getCachedData(cacheKey, 60 * 60, async () => {
            return await fetchChartData(
                geckoId,
                unixTimestampStartOfOneYearAgo,
                fullChart
            )
        })
        // Only cache 2xx responses - getCachedData uses fetchJsonOk for CoinGecko calls
        res.send({ data: results || {} })
    } catch (error) {
        console.error(
            `Error fetching/caching cgchart data for ${req.params.geckoId}:`,
            error
        )
        res.status(500).send({ error: 'Failed to fetch chart data.' })
    }
})

app.get('/supply/:geckoId', async (req: Request, res: Response) => {
    try {
        const geckoId = req.params.geckoId
        if (!GECKO_ID_REGEX.test(geckoId)) {
          return res.status(400).send({ error: 'Invalid geckoId' })
        }
        const results = await getCachedData(
            `supply_${geckoId}`,
            14400,
            async () => {
                const data = await fetchJsonOk(
                    `https://pro-api.coingecko.com/api/v3/coins/${geckoId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false&x_cg_pro_api_key=${process.env.CG_KEY}`
                )
                return { total_supply: data?.['market_data']?.['total_supply'] ?? null }
            }
        )
        res.send({ data: results })
    } catch (error) {
        console.error(
            `Error fetching/caching supply data for ${req.params.geckoId}:`,
            error
        )
        res.status(500).send({ error: 'Failed to fetch supply data.' })
    }
})

app.get('/protocol/:protocol', async (req: Request, res: Response) => {
    try {
        const protocol = sluggify(req.params.protocol)
        const results = await getCachedData(
            `protocol_${protocol}`,
            60 * 60 * 24,
            async () => {
                return (await getProtocolData(protocol))?.props
            }
        )

        const availableCharts = Object.fromEntries(
            Object.entries(chartExist).map(([key, func]) => [
                key,
                func(results),
            ])
        )

        res.send({ availableCharts, protocol: results })
    } catch (error) {
        console.error(
            `Error fetching/caching protocol data for ${req.params.protocol}:`,
            error
        )
        res.status(500).send({ error: 'Failed to fetch protocol data.' })
    }
})

async function fetchTop100Tokens() {
    try {
        const response = await fetch(
            `https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&x_cg_pro_api_key=${process.env.CG_KEY}`
        )
        if (!response.ok) return null
        const data = await response.json()
        return data
    } catch (error) {
        return null
    }
}

async function updateChartCache(geckoId: string) {
    const fullChart = true
    const cacheKey = `cgchart_${geckoId}_full`

    try {
        const results = await fetchChartData(geckoId, 0, fullChart)
        if (results && results.prices) {
            await cacache.put(cacheDir, cacheKey, JSON.stringify(results))
            await enforceCacheSizeLimit()
        }
    } catch (error) {}
}

async function updateTop100TokensChartCache() {
    try {
        const tokens = await fetchTop100Tokens()
        if (tokens) {
            for (const token of tokens) {
                await updateChartCache(token.id)
                await sleep(5000)
            }
        }
    } catch (error) {}
}

async function cleanupCache() {
    try {
        const now = Date.now()
        const maxAgeMs = 60 * 60 * 24 * 7 * 1000 // 7 days

        // Use cacache.verify with filter to remove old entries atomically
        // filter receives each entry; return false to remove it
        // Entry format: { key, integrity, path, time, size, metadata }
        await cacache.verify(cacheDir, {
            filter: (entry) => {
                if (!entry.time) return true // Keep entries without timestamp
                return (now - entry.time) <= 60 * 60 * 24 * 7 * 1000
            },
            concurrency: 20 // Default, but explicit for clarity
        })

        // Also enforce size limit after cleanup
        await enforceCacheSizeLimit()
    } catch (error) {
        console.error('Error during cache cleanup:', error)
    }
}

cron.schedule('0 */4 * * *', updateTop100TokensChartCache)
cron.schedule('0 3 * * *', cleanupCache)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)

    setTimeout(updateTop100TokensChartCache, 60000)
})