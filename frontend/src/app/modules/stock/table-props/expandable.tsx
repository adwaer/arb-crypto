import {ExpandableConfig} from "antd/es/table/interface";
import {Trade, MultiQuota} from "@aw/api";
import React from "react";
import {Table} from "antd";
import Column from "antd/es/table/Column";
import {nameof} from "@aw/shared";

function expandedRowRender(record: MultiQuota) {
    const {binance, bybit} = record;
    const array = [
        {title: 'Binance', ...binance},
        {title: 'Bybit', ...bybit}
    ]
    return <div>
        <Table dataSource={array} rowKey={item => item.title}>
            <Column title="Provider" dataIndex="title"/>
            <Column title="Price" dataIndex={nameof<Trade>('price')}/>
            <Column title="Time" dataIndex={nameof<Trade>('time')} render={time =>
                <span>{new Date(time).toLocaleTimeString()}</span>
            }/>
        </Table>
    </div>
}

const expandable: ExpandableConfig<MultiQuota> = {
    expandedRowRender: expandedRowRender,
    rowExpandable: (record) => true,
}

export default expandable;
