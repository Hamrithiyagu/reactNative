import {GET_PRODUCT_ID, GET_PRODUCTDETAIL_SUCCESS, GET_PRODUCTDETAIL_FAILURE} from '../actionTypes/product'

/** Action Creation */

export function getproductid (id){
    return {
        type: GET_PRODUCT_ID,
        id
    };
}

export function getproductsucess (productSucess) {
    return{
        type: GET_PRODUCTDETAIL_SUCCESS,
        productSucess
    };
}

export function getproductfailure (productFailure) {
    return{
        type: GET_PRODUCTDETAIL_FAILURE,
        productFailure
    };
}