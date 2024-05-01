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
};
