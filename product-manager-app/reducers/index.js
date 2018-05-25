import {
    combineReducers
} from "redux";
import productReducer from "./product";
import storeReducer from "./store";
import productDetailReducer from "./productDetail";
import addProductReducer from "./addProduct";
import searchReducer from './search';
import {
    createNavigationReducer
} from "react-navigation-redux-helpers";
import {AppNavigator} from "../containers/AppNavigator";


const navReducer = createNavigationReducer(AppNavigator);

const rootReducer = combineReducers({
    productDetailState : productDetailReducer,
    addProductState : addProductReducer,
    productState: productReducer,
    storeState: storeReducer,
    searchState: searchReducer,
    navState: navReducer
})

export default rootReducer;