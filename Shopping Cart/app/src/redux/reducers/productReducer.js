import { ActionTypes } from "../constants/action-types";
const initialState = {products:[]};
const productReducer = (state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:[...action.payload.data]};
        default:
            return state;    
    }
}
const selectedProductReducer = (state={},action)=>{
    switch(action.type){
        case ActionTypes.SELECTED_PRODUCT:
            return {product:action.payload};
        default:
            return state;
    }
}
export {productReducer,selectedProductReducer};