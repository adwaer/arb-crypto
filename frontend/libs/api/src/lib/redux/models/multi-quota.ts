import {Trade} from "./trade";

export interface MultiQuota {
  symbol: string;
  diffPercent: number;
  bybit: Trade;
  binance: Trade;
}

