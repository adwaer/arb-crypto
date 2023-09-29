import './stock.scss';
import columns from './columns'
import {useStockData} from "../../../../libs/api/src/lib/hooks/use-stock-data";
import {Table} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchStockData} from "../../../../libs/api/src/lib/requests/fetch-stock";
import {stockSelectAll} from "@aw/api";

/* eslint-disable-next-line */
export interface StockProps {
}


export function Stock(props: StockProps) {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('dispatch')
        dispatch<any>(fetchStockData(1));
    }, [dispatch]);

    const data = useSelector(stockSelectAll)

    return (
        <div>
            <Table columns={columns} dataSource={data} rowKey={item => item.symbol}/>
        </div>
    );
}

export default Stock;
