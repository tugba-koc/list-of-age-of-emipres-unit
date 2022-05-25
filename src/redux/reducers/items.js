import * as type from "./types";

const initialState = {
    items: [],
    filteredItems : [],
    isClicked: false,
    loading: false,
    error: null
}

export default function items(state=initialState,action){
    switch(action.type){
        case type.GET_ITEMS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case type.GET_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.items,
                filteredItems: action.items
            }
        case type.GET_FILTERED_ITEMS:
            return {
                ...state,
                isClicked: true,
                loading: false,
                filteredItems: state.items.filter((el)=>{
                    if(action.payload === "All"){
                        return state.items
                    }else{
                        return el.age === action.payload
                    }
                })
            }
        case type.GET_ITEMS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
        }
}