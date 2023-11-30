import { TableProps } from "antd";
import {MultiQuota} from "@aw/api";
import expandable from "./expandable";
import columns from "./columns";
import {nameof} from "@aw/shared";

const tableProps: TableProps<MultiQuota> = {
    rowKey: nameof<MultiQuota>('symbol'),
    columns,
    expandable
}

export default tableProps;
