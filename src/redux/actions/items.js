import * as type from "../reducers/types";

export function getItems(){
    return {
        type: type.GET_ITEMS_REQUESTED,
    }
}