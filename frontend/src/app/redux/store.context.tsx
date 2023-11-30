import {createContext, PropsWithChildren} from 'react';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import reducer from "./reducers";

export const StoreContext = createContext(process.env.NODE_ENV!);

type ApiProviderProps = {
    nodeEnv: string;
}

export const store = configureStore({
    reducer,
    // Additional middleware can be passed to this array
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
    // Optional Redux store enhancers
    enhancers: [],
});

export const StoreProvider = ({nodeEnv, children}: PropsWithChildren<ApiProviderProps>) => {
    return (
        <StoreContext.Provider value={nodeEnv}>
            <Provider store={store}>
                {children}
            </Provider>
        </StoreContext.Provider>
    )
}
