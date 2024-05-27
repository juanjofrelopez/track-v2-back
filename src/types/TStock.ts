export type EStock = string;

export type TStock = {
  ticker: EStock;
  date: number; // timestamp
  price: number;
  quantity: number;
};

export type TStocks = Array<TStock>;
