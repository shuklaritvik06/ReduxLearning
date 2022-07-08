import { combineReducers } from "redux";
import {selectedProductReducer,productReducer} from "./productReducer";

export const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer
});