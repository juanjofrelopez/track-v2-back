import Portfolio from "../models/Portfolio";
import { TPortfolio } from "../types/TPortfolio";
import { TStock, TStocks } from "../types/TStock";

export default {
  getPortfoliosByUserId(userId: string) {
    return Portfolio.find({ user_id: userId });
  },

  getPortfolioById(portolioId: string) {
    return Portfolio.findById(portolioId);
  },

  createPortfolio(newPortfolio: TPortfolio) {
    // @TODO: zod validation
    return Portfolio.create(newPortfolio);
  },

  updatePortfolio(portfolioId: string, newStocks: TStocks) {
    // @TODO: zod validation
    return Portfolio.updateOne(
      { _id: portfolioId },
      { $set: { stocks: newStocks } }
    );
  },
};
