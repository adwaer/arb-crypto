import styles from './api.module.scss';
import {useMemo} from "react";
import {initApiClient} from "./requests/api-client";
import {useApiUrl} from "./providers";

export function Api() {
    const api = useApiUrl();
    useMemo(() => initApiClient(api), [api])

    return (
        <div className={styles['container']}>
            <h1>Welcome to Api!</h1>
        </div>
    );
}

export default Api;
