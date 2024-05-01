import mongoose, { ConnectOptions } from "mongoose";
import config from "../config";

export default async (): Promise<any> => {
  await mongoose.connect(config.databaseURL);

  mongoose.set("toJSON", { virtuals: true });

  return mongoose.connection;
};
