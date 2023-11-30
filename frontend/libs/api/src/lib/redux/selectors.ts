import {createSelector} from '@reduxjs/toolkit';
import {STOCK_FEATURE_KEY, stockAdapter} from './reducer';
import {StockState} from "./stock-state";
import {MultiQuota} from "./models";
import moment from 'moment';

const {selectAll, selectEntities} = stockAdapter.getSelectors();

const getStockState = (rootState: {
    [STOCK_FEATURE_KEY]: StockState;
}): StockState => rootState[STOCK_FEATURE_KEY];

const getOnlyActual = (state: StockState): boolean => state.onlyActual
const getFiltered = (state: StockState, quotas: MultiQuota[]): MultiQuota[] => {
    if (state.onlyActual) {
        const currentDate = moment();
        return quotas.filter(quota => {
            const {binance, bybit} = quota;
            if (!binance.time || !bybit.time) {
                return false;
            }
            const binanceDate = moment(binance.time);
            const bybitDate = moment(bybit.time);

            return currentDate.diff(binanceDate, 'minutes') <= 1 && bybitDate.diff(bybitDate, 'minutes') <= 1
        });
    }
    return quotas;
}

export const stockSelectAll = createSelector(getStockState, selectAll);
export const stockSelectEntities = createSelector(getStockState, selectEntities);
export const stockOnlyActualSelect = createSelector(getStockState, getOnlyActual);
export const stockSelectFiltered = createSelector(getStockState, stockSelectAll, getFiltered);
