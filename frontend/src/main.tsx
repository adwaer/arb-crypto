// noinspection ES6UnusedImports (we need it)
import Symbol_observable from 'symbol-observable';

import {StrictMode} from 'react';
import {createRoot} from "react-dom/client";
import App from './app/app';
import {StoreProvider} from "./app/redux/store.context";


const root = createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <StoreProvider nodeEnv={process.env.NODE_ENV!}>
        <StrictMode>
            <App/>
        </StrictMode>
    </StoreProvider>
);
