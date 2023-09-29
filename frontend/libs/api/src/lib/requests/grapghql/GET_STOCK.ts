import {gql} from "@apollo/client";

export const GET_STOCK = gql`
    query GetStockData($percent: Int) {
        stock(percent: $percent) {
            data {
                symbol,
                diffPercent
                bybit {
                    bidPrice
                },
                binance {
                    bidPrice
                }
            }
        }
    }
`;
