import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchStockData} from "../requests/fetch-stock";
import {stockSelectAll} from "../redux";

export function useStockData(percent: number) {
    const data = useSelector(stockSelectAll)

    const dispatch = useDispatch();
    useEffect(() => {
        console.log('dispatch')
        dispatch<any>(fetchStockData(percent));
    }, []);

    return data;
}
