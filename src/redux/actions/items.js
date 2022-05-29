import * as type from "../reducers/types";

export function getItems(){
    return {
        type: type.GET_ITEMS_REQUESTED,
    }
}

export function filterItemsByAge(el){
    return {
        type: type.GET_FILTERED_ITEMS_BY_AGE,
        payload: el
    }
}

export function filterItemsByCost(el){
    return {
        type: type.GET_FILTERED_ITEMS_BY_COST,
        payload: el
    }
}

export function removeCostFilter(el){
    return {
        type: type.REMOVE_COST_FILTER,
        payload: el,
    }
}