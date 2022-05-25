import items from "../reducers/items";
import * as type from "../reducers/types";

export function getItems(){
    return {
        type: type.GET_ITEMS_REQUESTED,
    }
}

export function filterItems(el){
    return {
        type: type.GET_FILTERED_ITEMS,
        payload: el
    }
}