import { Redis } from "ioredis";

let redisClient: Redis;

export default {
  initRedis(): void {
    redisClient = new Redis();
  },
  getRedisClient(): Redis {
    return redisClient;
  },
};
