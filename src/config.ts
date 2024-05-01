import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  databaseURL: process.env.DATABASE_URL || "",
  api: {
    prefix: "/api",
  },
  jwtSecret: process.env.JWT_SECRET || "",
};
