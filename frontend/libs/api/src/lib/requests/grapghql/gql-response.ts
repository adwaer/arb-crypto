import {MultiQuota} from "../../redux";

export interface GqlResponse {
    stock: {
        data: MultiQuota[]
    }
}
