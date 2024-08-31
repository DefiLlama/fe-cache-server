import express, { Express, Request, Response } from 'express'
import dayjs from 'dayjs'
import cron from 'node-cron'
import cacache from 'cacache'
import path from 'path'
import fs from 'fs'
import os from 'os'

import { fetchChain } from '../frontend/src/components/ComparePage/chainFetcher'
import 'module-alias/register'
import fetch from 'node-fetch'
import cors from 'cors'
import { getProtocolData } from '../frontend/src/api/categories/protocols/getProtocolData'
import { chartExist, sleep, sluggify } from './utils'
import { fetchChartData } from './fetchChart'

global.fetch = fetch

const app: Express = express()

const cacheDir = path.join(os.tmpdir(), 'myapp-cache')
const cacheTTL = 60 * 60 * 24

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
    await cacache.put(cacheDir, key, JSON.stringify(data))
    return data
}

app.get('/cg_market_data', async (req: Request, res: Response) => {
    try {
        const results = await getCachedData(
            'cg_crypto_market_data',
            60 * 60,
            async () => {
                const response = await fetch(
                    `https://pro-api.coingecko.com/api/v3/global?x_cg_pro_api_key=${process.env.CG_KEY}`
                ).then((res) => res.json())
                const defiResponse = await fetch(
                    `https://pro-api.coingecko.com/api/v3/global/decentralized_finance_defi?x_cg_pro_api_key=${process.env.CG_KEY}`
                ).then((res) => res.json())
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
                const response = await fetch(
                    `https://pro-api.coingecko.com/api/v3/exchanges?x_cg_pro_api_key=${process.env.CG_KEY}`
                ).then((res) => res.json())
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

app.get('/:chain', async (req: Request, res: Response) => {
    try {
        const chain = req.params.chain
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
        const results = await getCachedData(
            `supply_${geckoId}`,
            14400,
            async () => {
                const data = await fetch(
                    `https://pro-api.coingecko.com/api/v3/coins/${geckoId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false&x_cg_pro_api_key=${process.env.CG_KEY}`
                ).then((res) => res.json())
                return { total_supply: data['market_data']['total_supply'] }
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
        } else {
        }
    } catch (error) {}
}

cron.schedule('0 */4 * * *', updateTop100TokensChartCache)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)

    setTimeout(updateTop100TokensChartCache, 60000)
})
