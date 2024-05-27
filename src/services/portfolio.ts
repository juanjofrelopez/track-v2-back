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

  createPortfolio(name: string, user_id: string) {
    const newPortfolio: TPortfolio = {
      user_id,
      name,
      stocks: [],
    };
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

  addStockToPortfolio(portfolioId: string, newStock: TStock) {
    return Portfolio.updateOne(
      { _id: portfolioId },
      { $push: { stocks: newStock } }
    );
  },
};
