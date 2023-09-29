export interface MultiQuota {
  symbol: string;
  diffPercent: number;
  bybit: MarketPosition;
  binance: MarketPosition;
}

export interface MarketPosition {
  bidPrice?: number;
  bidQty?: number;
  askPrice?: number;
  askQty?: number;
  ts?: number;
}
