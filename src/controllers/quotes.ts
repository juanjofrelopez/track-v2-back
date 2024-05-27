import { Request, Response } from "express";
import quotes from "../services/quotes";
import { EStock } from "../types/TStock";

export default {
  async getTickerPrice(req: Request, res: Response) {
    try {
      const { ticker } = req.params;
      const tickerPrice = await quotes.getTickerPrice(ticker as EStock);
      return res.status(200).json(tickerPrice);
    } catch (e) {
      if (e instanceof Error) {
        console.log("Error : ", e.message, e.stack);
        return res.status(500).json({ message: e.message, stack: e.stack });
      }
    }
  },

  async getDollarQuote(req: Request, res: Response) {
    try {
      const { date } = req.query;
      const quote = await quotes.getDollarQuote(date as string);
      return res.status(200).json(quote);
    } catch (e) {
      if (e instanceof Error) {
        console.log("Error : ", e.message, e.stack);
        return res.status(500).json({ message: e.message, stack: e.stack });
      }
    }
  },
};
