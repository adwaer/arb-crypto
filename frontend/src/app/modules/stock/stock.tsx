import './stock.scss';
import {Space, Switch, Table} from 'antd';
import {useSelector} from "react-redux";
import React, {useCallback, useEffect, useState} from "react";
import {fetchStockData} from "../../../../libs/api/src/lib/requests/fetch-stock";
import {stockSelectFiltered, stockActions, stockSelectAll} from "@aw/api";
import tableProps from "./table-props";
import {useAppDispatch} from "../../redux/hooks";

/* eslint-disable-next-line */
export interface StockProps {
}


export function Stock(props: StockProps) {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchStockData(1));
    }, [dispatch]);

    const data = useSelector(stockSelectFiltered);

    const [onlyActual, setOnlyActual] = useState(false);
    const toggleOnlyActual = useCallback(() => {
        setOnlyActual((prev) => {
            dispatch(stockActions.setOnlyActual(!prev));
            return !prev;
        })
    }, [onlyActual])

    return (
        <div>
            <Space style={{marginBottom: 16}}>
                <Switch
                    unCheckedChildren="Only actual"
                    checkedChildren="Show all"
                    checked={onlyActual}
                    onChange={toggleOnlyActual}
                />
            </Space>

            <Table
                {...tableProps}
                dataSource={data}
                bordered
                size="middle"
                scroll={{x: 'calc(700px + 50%)', y: 240}}
            />
        </div>
    );
}

export default Stock;
