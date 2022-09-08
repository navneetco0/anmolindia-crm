import { combineReducers, createStore } from "redux";
import { mainReducer } from "./reducer";

const rootReducer = combineReducers({
    mainReducer
});

export const store = createStore(rootReducer)