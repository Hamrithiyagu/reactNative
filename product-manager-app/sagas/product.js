import {
    put,
    takeLatest
} from "redux-saga/effects";
import * as actionCreators from "../actionCreators/product"
import * as actionDetailCreators from "../actionCreators/productDetail"
import * as addActionCreators from "../actionCreators/addProduct"
import {
    ADD_PRODUCTS, GET_PRODUCTS, ADD_PRODUCT, GET_PRODUCT_ID, DELETE_PRODUCT
} from "../actionTypes/product";

let URI = "http://172.16.105.196:4000";

function* getProducts(action) {
    try {
        let products = yield fetch(`${URI}/products?_page=${action.page}&_limit=${action.limit}`).then(r => r.json());
        yield put(actionCreators.getProductsSuccess(products))
    } catch (error) {
        yield put(actionCreators.getProductsFailure(error))
    }
}

function* getProductDetails(action) {
    try {
        let productDetails = yield fetch(`${URI}/products/${action.id}`).then(r => r.json());
        yield put(actionDetailCreators.getproductsucess(productDetails))
    } catch (error) {
        yield put(actionDetailCreators.getproductfailure(error))
    }
}

function* addProduct(action){
    try{
        let addProduct = yield fetch(`${URI}/products`, {
            body: JSON.stringify(
                action.product
            ),
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
          });
          yield put(addActionCreators.addProductSucess())
        } catch (error){
            yield put(addActionCreators.addProductFailure(error))
        }
    }

// function* getProduct(action) {
//     try {
//         let product = yield fetch(`${URI}\product\${action.id}`).then(r => r.json());
//         yield put(actionCreators.getProductSuccess(product))
//     } catch (error) {
//         yield put(actionCreators.getProductFailure(error))
//     }
// }

function* deleteProduct(action) {
    try {
        let product = yield fetch(`${URI}/products/${action.id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        }).then(r => r.json());
        yield put(actionCreators.deleteProductSuccess())
    } catch (error) {
        yield put(actionCreators.deleteProductFailure(error))
    }
}

export function* productWatchers() {
    yield [
        takeLatest(GET_PRODUCTS, getProducts), takeLatest(GET_PRODUCT_ID, getProductDetails),
        takeLatest(ADD_PRODUCTS, addProduct),
        takeLatest(DELETE_PRODUCT, deleteProduct),
    ]
}