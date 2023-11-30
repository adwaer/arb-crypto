import {createEntityAdapter, createSlice, PayloadAction,} from '@reduxjs/toolkit';
import {MultiQuota} from "./models";
import {StockState} from "./stock-state";
import {fetchStockData} from "../requests/fetch-stock";

export const STOCK_FEATURE_KEY = 'stock';
export const stockAdapter = createEntityAdapter<MultiQuota>({
    selectId: model => model.symbol
});

const initialState: StockState = stockAdapter.getInitialState({
    loadingStatus: 'not loaded',
    error: null,
    onlyActual: false
});

const stockSlice = createSlice({
    name: STOCK_FEATURE_KEY,
    initialState,
    reducers: {
        // add: stockAdapter.addOne,
        // remove: stockAdapter.removeOne,
        setOnlyActual: (state, {payload: onlyActual}: PayloadAction<boolean>) => {
            state.onlyActual = onlyActual;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchStockData.pending, (state: StockState) => {
                state.loadingStatus = 'loading';
            })
            .addCase(
                fetchStockData.fulfilled,
                (state: StockState, {payload}: PayloadAction<MultiQuota[]>) => {
                    stockAdapter.setAll(state, payload);
                    state.loadingStatus = 'loaded';
                }
            )
            .addCase(fetchStockData.rejected, (state: StockState, action) => {
                state.loadingStatus = 'error';
                state.error = action.error.message;
            });
    },
});


export const stockReducer = stockSlice.reducer;
export const stockActions = stockSlice.actions;
