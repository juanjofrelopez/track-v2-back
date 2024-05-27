import expressLoader from "./express";
import mongooseLoader from "./mongoose";
import { Express } from "express";
import redis from "./redis";

export default async (app: Express) => {
  await mongooseLoader();
  console.log("🥵 DB loaded and connected!");

  await expressLoader(app);
  console.log("🥵 Express loaded");

  // redis.initRedis();
  // console.log("🥵 Redis loaded");
};
