import { EStock, TStock } from "./TStock";

export type TPortfolio = Array<{
  user_id: string;
  name: string;
  stocks: Array<TStock>;
}>;
