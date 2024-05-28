import DollarQuote from "../models/DollarQuote";
import Prices from "../models/Prices";
import { EStock } from "../types/TStock";
import { TStockPrices } from "../types/TStockPrices";

export default {
  async getTickerPrice(ticker: EStock) {
    const prices = await Prices.find({}).lean();
    const foundTicker = prices[0].stocks.find((p) => p.ticker === ticker);
    if (!foundTicker) throw new Error("couldn't find ticker price");
    return foundTicker;
  },

  getDollarQuote(date: string | undefined) {
    if (!date) throw new Error("missing date");
    return DollarQuote.findOne({ date });
  },
};
