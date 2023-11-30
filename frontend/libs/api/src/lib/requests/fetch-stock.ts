import {createAsyncThunk} from "@reduxjs/toolkit";
import {MultiQuota} from "../redux";
import {apiClient} from "./api-client";
import {GET_STOCK} from "./grapghql/GET_STOCK";

export const fetchStockData = createAsyncThunk<MultiQuota[], number>(
    'stock/fetch',
    async (percent: number, thunkAPI) => {
        const response = await apiClient.query({percent}, GET_STOCK);
        return response.stock.data;
    }
);
