import {GET_PRODUCT_ID, GET_PRODUCTDETAIL_SUCCESS, GET_PRODUCTDETAIL_FAILURE} from '../actionTypes/product'


const initialload = {
    productDisplay : {},
};

export default (prevState = initialload, action) => {
    switch (action.type){
        case GET_PRODUCT_ID : {
            return{
                ...prevState,
                isLoading : true
            }
        }
        case GET_PRODUCTDETAIL_SUCCESS : {
            return {
                ...prevState,
                isLoading : false,
                productDisplay : action.productSucess
            }
        }
        case GET_PRODUCTDETAIL_FAILURE : {
            return {
                ...prevState,
                isLoading : false,
                error : action.productFailure
            }
        }
        default : 
            return prevState;
        
    };
}



