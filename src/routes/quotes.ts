import { Router } from "express";
import controllers from "../controllers";

const route = Router();

export default (app: Router) => {
  app.use("/quotes", route);

  route.get("/:ticker", controllers.quotes.getTickerPrice);

  route.get("/dollar-quote", controllers.quotes.getDollarQuote);
};
