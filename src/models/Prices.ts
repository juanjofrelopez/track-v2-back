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
  { timestamps: false, _id: true }
);

export default mongoose.model<TStockPrices & mongoose.Document>(
  "price",
  PricesSchema
);
