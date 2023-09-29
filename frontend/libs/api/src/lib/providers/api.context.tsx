import {createContext, useContext, PropsWithChildren} from 'react';

export const ApiContext = createContext("");

export const useApi = () => useContext(ApiContext);

type ApiProviderProps = {
    apiUrl: string;
}

export const ApiProvider = ({apiUrl, children}: PropsWithChildren<ApiProviderProps>) => {
    return (
        <ApiContext.Provider value={apiUrl}>
            {children}
        </ApiContext.Provider>
    )
}
