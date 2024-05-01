import { Router } from "express";
import controllers from "../controllers";

const route = Router();

export default (app: Router) => {
  app.use("/portfolio", route);

  route.post("/create", controllers.portfolio.createPortfolio);
};
