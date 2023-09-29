import {MultiQuota} from "../../redux/models/multi-quota";

export interface GqlResponse {
    stock: {
        data: MultiQuota[]
    }
}
