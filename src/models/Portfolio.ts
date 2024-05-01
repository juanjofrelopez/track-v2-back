import mongoose from "mongoose";
import { TPortfolio } from "../types/TPortfolio";

const PortfolioSchema = new mongoose.Schema(
  {
    user_id: String,
    name: String,
    stocks: [
      {
        ticker: String,
        date: String,
        price: Number,
        quantity: Number,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<TPortfolio & mongoose.Document>(
  "Portfolio",
  PortfolioSchema,
  "portfolios"
);
