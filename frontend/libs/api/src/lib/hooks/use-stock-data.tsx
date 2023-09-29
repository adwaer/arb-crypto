import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {fetchStockData} from "../requests/fetch-stock";

export function useStockData(percent: number) {
    const [quotas, setQuotas] = useState(null);

    const dispatch = useDispatch();
    useEffect(() => {
        console.log('dispatch')
        dispatch<any>(fetchStockData(1));
    }, );

    return quotas;
}
