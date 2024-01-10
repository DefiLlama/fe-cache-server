import express, { Express, Request, Response } from 'express'
import { fetchChain } from '../frontend/src/components/ComparePage/chainFetcher'
import 'module-alias/register'
import fetch from 'node-fetch'
import * as redis from 'redis'
import cors from 'cors'
import { getProtocolData } from '../frontend/src/api/categories/protocols/getProtocolData'
import { chartExist } from './utils'
import { sluggify } from '~/utils/cache-client'

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
        res.send(null)
    }
})

app.get('/cgchart/:geckoId', async (req: Request, res: Response) => {
    try {
        const geckoId = req.params.geckoId

        let results

        const cacheResults = await redisClient.get(geckoId)
        if (cacheResults && cacheResults?.prices) {
            results = JSON.parse(cacheResults)
        } else {
            results = await fetch(
                `https://api.coingecko.com/api/v3/coins/${geckoId}/market_chart?vs_currency=usd&days=365`
            ).then((r) => r.json())
            if (results?.prices) {
                await redisClient.set(geckoId, JSON.stringify(results), {
                    EX: 14400,
                })
            }
        }
        res.send({
            data: results,
        })
    } catch (e) {
        res.send(null)
    }
})

app.get('/cgchart/update/:geckoId', async (req: Request, res: Response) => {
    try {
        const geckoId = req.params.geckoId

        let results = await fetch(
            `https://api.coingecko.com/api/v3/coins/${geckoId}/market_chart?vs_currency=usd&days=365`
        ).then((r) => r.json())
        await redisClient.set(geckoId, JSON.stringify(results), {
            EX: 14400,
        })
        res.send({
            status: 'updated',
            data: results,
        })
    } catch (e) {
        res.send(null)
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
        res.send(null)
    }
})

app.listen('3000', () => {
    console.log('Running')
})
