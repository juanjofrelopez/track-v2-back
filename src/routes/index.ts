import { Router } from "express";
import auth from "./auth";
import portfolio from "./portfolio";
import quotes from "./quotes";

export default () => {
  const app = Router();
  auth(app);
  portfolio(app);
  quotes(app);
  return app;
};
