import { combineReducers } from "redux";
import items from "./items";

const rootReducer = combineReducers({
    items: items
});

export default rootReducer;