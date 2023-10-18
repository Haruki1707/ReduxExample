import {createStore, combineReducers} from "@reduxjs/toolkit";
import depositoReducer from "./reducers/depositoReducer";

const rootReducer = combineReducers({
    depositoStore: depositoReducer
});

export const store = createStore(rootReducer);