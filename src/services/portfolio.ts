import Portfolio from "../models/Portfolio";
import { TPortfolio } from "../types/TPortfolio";

export default {
  getPortfoliosByUserId(userId: string) {
    return Portfolio.find({ user_id: userId });
  },

  getPortfolioById(portolioId: string) {
    return Portfolio.findById(portolioId);
  },

  createPortfolio(newPortfolio: TPortfolio) {
    // zod validation
    return Portfolio.create(newPortfolio);
  },
};
