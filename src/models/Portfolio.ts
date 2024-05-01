import mongoose from "mongoose";
import { TPortfolio } from "../types/TPortfolio";

const StocksSchema = new mongoose.Schema(
  {
    ticker: String,
    date: Number,
    price: Number,
    quantity: Number,
  },
  { timestamps: false, _id: false }
);

const PortfolioSchema = new mongoose.Schema(
  {
    user_id: String,
    name: String,
    stocks: [StocksSchema],
  },
  { timestamps: true }
);

export default mongoose.model<TPortfolio & mongoose.Document>(
  "Portfolio",
  PortfolioSchema,
  "portfolios"
);
