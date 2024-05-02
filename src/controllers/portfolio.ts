import { Request, Response } from "express";
import portfolioService from "../services/portfolio";

export default {
  async createPortfolio(req: Request, res: Response) {
    try {
      const { portfolio } = req.body;
      const result = await portfolioService.createPortfolio(portfolio);
      return res.status(200).json(result);
    } catch (e) {
      if (e instanceof Error) {
        console.log("Error : ", e.message, e.stack);
        return res.status(500).json({ message: e.message, stack: e.stack });
      }
    }
  },

  async getAllPortfolios(req: any, res: Response) {
    try {
      const { user } = req;
      const user_id = user._id;
      const result = await portfolioService.getPortfoliosByUserId(user_id);
      return res.status(200).json(result);
    } catch (e) {
      if (e instanceof Error) {
        console.log("Error : ", e.message, e.stack);
        return res.status(500).json({ message: e.message, stack: e.stack });
      }
    }
  },

  async getPortfolio(req: Request, res: Response) {
    try {
      const { portfolioId } = req.params;
      const result = await portfolioService.getPortfolioById(portfolioId);
      return res.status(200).json(result);
    } catch (e) {
      if (e instanceof Error) {
        console.log("Error : ", e.message, e.stack);
        return res.status(500).json({ message: e.message, stack: e.stack });
      }
    }
  },

  async updatePortfolio(req: Request, res: Response) {
    try {
      const { portfolioId } = req.params;
      const { newStocks } = req.body;
      const result = await portfolioService.updatePortfolio(
        portfolioId,
        newStocks
      );
      return res.status(200).json(result);
    } catch (e) {
      if (e instanceof Error) {
        console.log("Error : ", e.message, e.stack);
        return res.status(500).json({ message: e.message, stack: e.stack });
      }
    }
  },
};
