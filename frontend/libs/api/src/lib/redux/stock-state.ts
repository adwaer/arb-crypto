import {EntityState} from '@reduxjs/toolkit';
import {MultiQuota} from "./models";

export interface StockState extends EntityState<MultiQuota> {
    onlyActual: boolean;
    loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
    error?: string | null;
}
