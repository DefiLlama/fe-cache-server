import express, { Express, Request, Response } from 'express';
import { fetchChain } from '../frontend/src/components/ComparePage/chainFetcher';
import 'module-alias/register';
import fetch from 'node-fetch';
import * as redis from 'redis';
import cors from 'cors';

global.fetch = fetch;

let redisClient;

(async () => {
  redisClient = redis.createClient({ url: process.env.REDIS_DB });

  redisClient.on('error', (error) =>
    console.error(`Error : ${error}`)
  );

  await redisClient.connect();
})();

const app: Express = express();

app.use(cors());

app.get('/:chain', async (req: Request, res: Response) => {
  try {
    const chain = req.params.chain;
    let results;

    const cacheResults = await redisClient.get(chain);
    if (cacheResults) {
      results = JSON.parse(cacheResults);
    } else {
      results = await fetchChain({ chain: [chain] });
      await redisClient.setEx(chain, 14400, JSON.stringify(results));
    }
    res.send({
      data: results,
    });
  } catch (e) {
    res.send(null);
  }
});

app.listen('3000', () => {
  
  console.log('Running');
});
