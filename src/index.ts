import express, { Express, Request, Response } from 'express'
import dayjs from 'dayjs'

import { fetchChain } from '../frontend/src/components/ComparePage/chainFetcher'
import 'module-alias/register'
import fetch from 'node-fetch'
import * as redis from 'redis'
import cors from 'cors'
import { getProtocolData } from '../frontend/src/api/categories/protocols/getProtocolData'
import { chartExist, sluggify } from './utils'
import { fetchChartData } from './fetchChart'

global.fetch = fetch

let redisClient
;(async () => {
    redisClient = redis.createClient({ url: process.env.REDIS_DB })

    redisClient.on('error', (error) => console.error(`Error : ${error}`))

    await redisClient.connect()
})()

const app: Express = express()

app.use(cors())

app.get('/:chain', async (req: Request, res: Response) => {
    try {
        const chain = req.params.chain
        const redisChain = chain + '_redis'
        let results

        const cacheResults = await redisClient.get(redisChain)
        if (cacheResults) {
            results = JSON.parse(cacheResults)
        } else {
            results = await fetchChain({ chain })
            await redisClient.setEx(redisChain, 14400, JSON.stringify(results))
        }
        res.send({
            data: results,
        })
    } catch (e) {
        res.status(500).send({ error: 'Internal Server Error' })
    }
})

app.get('/cgchart/:geckoId', async (req: Request, res: Response) => {
    try {
        const geckoId = req.params.geckoId
        const fullChart = req.query.fullChart === 'true'
        const storageKey = 'cgchart_' + geckoId + (fullChart ? '_full' : '')

        const unixTimestampStartOfOneYearAgo = dayjs()
            .subtract(1, 'year')
            .startOf('day')
            .unix()

        let cachedResults = await redisClient.get(storageKey)
        let results = cachedResults ? JSON.parse(cachedResults) : null

        if (!results || !results.prices) {
            try {
                results = await fetchChartData(
                    geckoId,
                    unixTimestampStartOfOneYearAgo,
                    fullChart
                )

                if (results && results.prices) {
                    await redisClient.set(storageKey, JSON.stringify(results), {
                        EX: 14400,
                    })
                }
            } catch (e) {
                res.send({ error: e?.message })

                return
            }
        }

        res.send({ data: results || {} })
    } catch (e) {
        res.status(500).send({ error: 'Internal Server Error' })
    }
})

app.get('/supply/:geckoId', async (req: Request, res: Response) => {
    try {
        const geckoId = req.params.geckoId
        const redisId = 'supply_' + geckoId
        let results

        const cacheResults = await redisClient.get(redisId)
        if (cacheResults) {
            results = JSON.parse(cacheResults)
        } else {
            const data = await fetch(
                `https://pro-api.coingecko.com/api/v3/coins/${geckoId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false&x_cg_pro_api_key=${process.env.CG_KEY}`
            ).then((res) => res.json())
            results = { total_supply: data['market_data']['total_supply'] }
            await redisClient.setEx(redisId, 14400, JSON.stringify(results))
        }
        res.send({
            data: results,
        })
    } catch (e) {
        res.status(500).send({ error: 'Internal Server Error' })
    }
})

app.get('/api/coingecko/global', async (req: Request, res: Response) => {
    try {
        const redisKey = 'coingecko_global_data'
        let results

        const cachedResults = await redisClient.get(redisKey)
        if (cachedResults) {
            results = JSON.parse(cachedResults)
        } else {
            const response = await fetch(
                `https://pro-api.coingecko.com/api/v3/global?x_cg_pro_api_key=${process.env.CG_KEY}`
            )
            const data = await response.json()

            results = data.data

            await redisClient.setex(redisKey, 60 * 60, JSON.stringify(results))
        }

        res.send({ data: results })
    } catch (error) {
        console.error('Error fetching CoinGecko global data:', error)
        res.status(500).json({
            error: 'Internal Server Error',
            message: error.message,
        })
    }
})

app.get('/protocol/:protocol', async (req: Request, res: Response) => {
    try {
        const protocol = sluggify(req.params.protocol)
        const redisKey = 'protocol_data_' + protocol.toLowerCase()
        let results

        const cacheResults = await redisClient.get(redisKey)
        if (cacheResults) {
            results = JSON.parse(cacheResults)
        } else {
            results = (await getProtocolData(protocol))?.props
            await redisClient.set(redisKey, JSON.stringify(results), {
                EX: 14400,
            })
        }

        const availableCharts = Object.fromEntries(
            Object.entries(chartExist).map(([key, func]) => [
                key,
                func(results),
            ])
        )

        res.send({ availableCharts, protocol: results })
    } catch (e) {
        console.log(e)
        res.status(500).send({ error: 'Internal Server Error' })
    }
})

app.listen('3000', () => {
    console.log('Running')
})
