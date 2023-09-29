import {STORE_FEATURE_KEY, storeReducer} from './app/redux/store.slice';
import {STOCK_FEATURE_KEY, stockReducer} from '@aw/api';

export default {
    [STORE_FEATURE_KEY]: storeReducer,
    [STOCK_FEATURE_KEY]: stockReducer,
};
