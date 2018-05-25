import {ADD_PRODUCTS, ADD_PRODUCTS_SUCCESS, ADD_PRODUCTS_FAILURE} from '../actionTypes/product'

export default (prevState = {}, action) => {
    switch (action.type){
        case ADD_PRODUCTS : {
            return{
                ...prevState,
                isLoading : true,
                addProductsuccessFlag : false,
            }
        }
        case ADD_PRODUCTS_SUCCESS : {
            return{
                ...prevState,
                isLoading : false,
                addProductsuccessFlag : true,
            }
        }
        case ADD_PRODUCTS_FAILURE : {
            return{
                ...prevState,
                isLoading : false,
                error: action.productfailure,
                addProductsuccessFlag : false,
            }
        }
        default : return prevState;
    };
}