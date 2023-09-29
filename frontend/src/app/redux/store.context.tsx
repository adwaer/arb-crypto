import {createContext, PropsWithChildren, useContext} from 'react';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import reducer from "./reducers";

export const StoreContext = createContext(process.env.NODE_ENV!);

export const useEnv = () => useContext(StoreContext);

type ApiProviderProps = {
    nodeEnv: string;
}

function getStore(nodeEnv: string) {
    return configureStore({
        reducer,
        // Additional middleware can be passed to this array
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
        devTools: nodeEnv !== 'production',
        // Optional Redux store enhancers
        enhancers: [],
    });
}

export const StoreProvider = ({nodeEnv, children}: PropsWithChildren<ApiProviderProps>) => {
    const store = getStore(nodeEnv);

    return (
        <StoreContext.Provider value={nodeEnv}>
            <Provider store={store}>
                {children}
            </Provider>
        </StoreContext.Provider>
    )
}
