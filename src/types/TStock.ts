export type EStock = "AAPL.BA" | "SPY.BA";

export type TStock = {
  ticker: EStock;
  date: number; // timestamp
  price: number;
  quantity: number;
};

export type TStocks = Array<TStock>;
