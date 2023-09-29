import {EntityState} from '@reduxjs/toolkit';
import {MultiQuota} from "./models/multi-quota";

export interface StockState extends EntityState<MultiQuota> {
    loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
    error?: string | null;
}
