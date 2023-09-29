import {createContext, useContext, PropsWithChildren, useMemo} from 'react';
import {initApiClient} from "../requests/api-client";

const ApiContext = createContext("");

export const useApiUrl = () => useContext(ApiContext);

type ApiProviderProps = {
    apiUrl: string;
}

export const ApiProvider = ({apiUrl, children}: PropsWithChildren<ApiProviderProps>) => {
    useMemo(() => initApiClient(apiUrl), [apiUrl])
    return (
        <ApiContext.Provider value={apiUrl}>
            {children}
        </ApiContext.Provider>
    )
}
