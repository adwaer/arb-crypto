import {ColumnsType} from 'antd/es/table';
import {nameof} from "@aw/shared";
import {MultiQuota} from "@aw/api";


const columns: ColumnsType<MultiQuota> = [
    {
        title: 'Symbol',
        dataIndex: nameof<MultiQuota>('symbol'),
        key: nameof<MultiQuota>('symbol')
    },
    {
        title: 'Diff',
        dataIndex: nameof<MultiQuota>('diffPercent'),
        key: nameof<MultiQuota>('diffPercent'),
        sorter: (a, b) => a.diffPercent - b.diffPercent,
        // sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null
    },
]

export default columns;
