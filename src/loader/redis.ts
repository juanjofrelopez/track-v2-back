import { Redis } from "ioredis";

let redisClient: Redis;

export default {
  async initRedis() {
    try {
      redisClient = new Redis({ host: "redis-server", port: 6379 });
    } catch (error) {
      console.log("Error trying to connect to redis");
    }
  },
  getRedisClient(): Redis {
    return redisClient;
  },
};
