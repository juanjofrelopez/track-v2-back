import { EStock } from "./TStock";

export type TPortfolio = Array<{
  name: string;
  stocks: Array<{
    ticker: EStock;
    date: string;
    price: number;
    quantity: number;
  }>;
}>;
