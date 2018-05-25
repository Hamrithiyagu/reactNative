import { ADD_PRODUCTS, ADD_PRODUCTS_SUCCESS,ADD_PRODUCTS_FAILURE } from "../actionTypes/product";

export function addProduct(product){
    return{
        type: ADD_PRODUCTS,
        product
    }
}
export function addProductSucess(){
    return{
        type: ADD_PRODUCTS_SUCCESS
    }
}
export function addProductFailure(productfailure){
    return{
        type: ADD_PRODUCTS_FAILURE,
        productfailure
    }
}