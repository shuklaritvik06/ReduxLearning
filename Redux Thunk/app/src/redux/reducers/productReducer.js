import { ActionTypes } from "../constants/action-types";
const initialState = {products:[]};
const productReducer = (state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.FETCH_PRODUCT:
            return {...state,products:[...action.payload]};
        default:
            return state;    
    }
}
const selectedProductReducer = (state={},action)=>{
    switch(action.type){
        case ActionTypes.FETCH_SELECTED_PRODUCT:
            return {product:action.payload};
        default:
            return state;
    }
}
export {productReducer,selectedProductReducer};