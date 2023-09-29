import {ColumnGroupType, type ColumnsType } from 'antd/es/table';
import {MultiQuota} from "../../../../libs/api/src/lib/redux/models/multi-quota";
import {nameof} from "@aw/shared";

// function getForPosition(prefix: string): ColumnsType<MultiQuota>[] {
//     return ColumnGroupType
// }

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
    }
]

export default columns;
