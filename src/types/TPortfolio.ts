import { TStocks } from "./TStock";

export type TPortfolio = {
  user_id: string;
  name: string;
  stocks: TStocks;
};
