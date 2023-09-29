import {createSelector} from '@reduxjs/toolkit';
import {STOCK_FEATURE_KEY, stockAdapter} from './reducer';
import {StockState} from "./stock-state";

const {selectAll, selectEntities} = stockAdapter.getSelectors();

export const getStockState = (rootState: {
    [STOCK_FEATURE_KEY]: StockState;
}): StockState => rootState[STOCK_FEATURE_KEY];

export const stockSelectAll = createSelector(getStockState, selectAll);
export const stockSelectEntities = createSelector(getStockState, selectEntities);
