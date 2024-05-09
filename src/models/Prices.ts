import mongoose from "mongoose";
import { TStockPrices } from "../types/TStockPrices";

const StockPriceSchema = new mongoose.Schema(
  {
    ticker: String,
    price: String,
  },
  { timestamps: false, _id: false }
);

const PricesSchema = new mongoose.Schema(
  {
    stocks: [StockPriceSchema],
  },
  { timestamps: true }
);

export default mongoose.model<TStockPrices & mongoose.Document>(
  "StockPrice",
  PricesSchema,
  "stockPrices"
);
