import { Router } from "express";
import auth from "./auth";
import portfolio from "./portfolio";

export default () => {
  const app = Router();
  auth(app);
  portfolio(app);
  return app;
};
