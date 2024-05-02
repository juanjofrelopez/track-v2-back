import { Router } from "express";
import controllers from "../controllers";
import isAuth from "../middleware/isAuth";
import attachCurrentUser from "../middleware/attachCurrentUser";

const route = Router();

export default (app: Router) => {
  app.use("/portfolio", route);

  route.post("/create", controllers.portfolio.createPortfolio);

  route.get(
    "",
    isAuth,
    attachCurrentUser,
    controllers.portfolio.getAllPortfolios
  );

  route.get(
    "/:portfolioId",
    isAuth,
    attachCurrentUser,
    controllers.portfolio.getPortfolio
  );

  route.put(
    "/:portfolioId",
    isAuth,
    attachCurrentUser,
    controllers.portfolio.updatePortfolio
  );
};
