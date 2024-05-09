import mongoose from "mongoose";
import { TDollarQuote } from "../types/TDollarQuote";

const DollarQuoteSchema = new mongoose.Schema(
  {
    date: String,
    quote: Number,
  },
  { timestamps: false }
);

export default mongoose.model<TDollarQuote & mongoose.Document>(
  "DollarQuote",
  DollarQuoteSchema,
  "dollarQuotes"
);
