import * as type from "./types";

const initialState = {
    items: [],
    filterStateCost: {},
    filterStateAge: {},
    filterStateCheck: {},
    filteredItemsbyAge: [],
    filteredItemsbyCost: [],
    isFilteredByAge: false,
    isFilteredByCost: false,
    loading: false,
    error: null
}

export default function items(state = initialState, action) {

    switch (action.type) {
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
                filteredItemsbyAge: action.items
            }
        case type.GET_FILTERED_ITEMS_BY_AGE:
            // console.log(state.filterStateCost)
            return {
                ...state,
                isFilteredByAge: true,
                loading: false,
                filterStateAge: { age: action.payload },
                filteredItemsbyAge: state.items.filter(el => {
                    if (el.age === action.payload) {
                        return el;
                    } else if (action.payload === "All") {
                        return state.items;
                    }
                }),
                filteredItemsbyCost: state.isFilteredByCost && state.items.filter((el) => {
                    if (el.age === action.payload || action.payload === "All") {
                        if (el.cost !== null && el.cost !== "" && el.cost !== undefined && Object.keys(el.cost).every(item => Object.keys(state.filterStateCost).includes(item) && state.filterStateCheck[item] ) && Object.keys(el.cost).every(item => (Number(el.cost[item]) >= Number(state.filterStateCost[item].min)) && (Number(el.cost[item]) <= Number(state.filterStateCost[item].max)))) {
                            return el
                        }
                    } else {
                        state.filteredItemsbyCost = []
                    }
                }
                ) 
            }

        case type.GET_FILTERED_ITEMS_BY_COST:
            return {
                ...state,
                isFilteredByCost: true,
                loading: false,
                filterStateCost: action.payload,
                filteredItemsbyCost: !state.isFilteredByAge ? state.items.filter((el) => {
                   
                    if (el.cost !== null && el.cost !== "" && el.cost !== undefined && Object.keys(el.cost).every(item => Object.keys(action.payload).includes(item)) && Object.keys(el.cost).every(item => (Number(el.cost[item]) <= Number(action.payload[item].max)) &&  (Number(el.cost[item]) >= Number(action.payload[item].min)))) {
                        return el
                    } else {
                        state.filteredItemsbyCost = []
                    }
                }
                ) : state.filteredItemsbyAge.filter((el) => {

                    if (el.cost !== null && el.cost !== "" && el.cost !== undefined && Object.keys(el.cost).every(item => Object.keys(action.payload).includes(item)) && Object.keys(el.cost).every(item => (Number(el.cost[item]) <= Number(action.payload[item].max)) &&  (Number(el.cost[item]) >= Number(action.payload[item].min)))) {
                        return el
                    } else {
                        state.filteredItemsbyCost = []
                    }
                }
                )
            }


        case type.REMOVE_COST_FILTER:
            console.log("REMOVE_COST_FILTER",action.payload)

        return {
                ...state,
                isFilteredByCost: true,
                loading: false,
                filterStateCheck: action.payload,
                filteredItemsbyCost: !state.isFilteredByAge ? state.items.filter((el) => {
                    if (el.cost !== null && el.cost !== "" && el.cost !== undefined && state.filterStateCost && Object.keys(el.cost).every(item => Object.keys(state.filterStateCost).includes(item) && action.payload[item]) && Object.keys(el.cost).every(item => (Number(el.cost[item]) >= Number(state.filterStateCost[item].min)) && (Number(el.cost[item]) <= Number(state.filterStateCost[item].max)))) {
                        console.log("2 control")
                        return el
                    } else {
                        console.log("3 control")
                        state.filteredItemsbyCost = []
                    }
                }
                ) : state.filteredItemsbyAge.filter((el) => {
                    if (el.cost !== null && el.cost !== "" && el.cost !== undefined && state.filterStateCost && Object.keys(el.cost).every(item => Object.keys(state.filterStateCost).includes(item) && action.payload[item]) && Object.keys(el.cost).every(item => (Number(el.cost[item]) >= Number(state.filterStateCost[item].min)) && (Number(el.cost[item]) <= Number(state.filterStateCost[item].max)))) {
                        console.log("1 control")
                        return el
                    } else {
                        state.filteredItemsbyCost = []
                    }
                }
                )
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