import mongoose from "mongoose";
// import { TStockPrices } from "../types/TStockPrices";

// const StockPriceSchema = new mongoose.Schema(
//   {
//     ticker: String,
//     price: String,
//   },
//   { timestamps: false, _id: false }
// );

// const PricesSchema = new mongoose.Schema(
//   {
//     stocks: [StockPriceSchema],
//   },
//   { timestamps: true, _id: false }
// );

// export default mongoose.model<TStockPrices & mongoose.Document>(
//   "prices",
//   PricesSchema,
//   "prices"
// );

const priceSchema = new mongoose.Schema({
  SPY: Number,
  DIA: Number,
  QQQ: Number,
  ARKK: Number,
  IWM: Number,

  AMZN: Number,
  VIST: Number,
  GOOGL: Number,
  KO: Number,
  COIN: Number,
  T: Number,
  TSLA: Number,
  AAPL: Number,
  VALE: Number,
  MELI: Number,
  NIO: Number,
  BABA: Number,
  META: Number,
  MSFT: Number,
  EEM: Number,
  XLE: Number,
  BBD: Number,
  ERIC: Number,
});

export default mongoose.model("price", priceSchema, "prices");
