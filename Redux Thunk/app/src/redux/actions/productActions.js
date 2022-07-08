import { ActionTypes } from "../constants/action-types"
import fakeStore from "../../apis/fakeStore";

export const fetchAndSetProducts = ()=>
 async function (dispatch){
        const response = await fakeStore.get("/products");
        dispatch({
            type:ActionTypes.FETCH_PRODUCT,
            payload: response.data
       });
}

export const fetchSelectedProduct = (productId)=>
    async function (dispatch){
        const response = await fakeStore.get(`/products/${productId}`);
        dispatch({
            type:ActionTypes.FETCH_SELECTED_PRODUCT,
            payload: response.data
        })    
}
