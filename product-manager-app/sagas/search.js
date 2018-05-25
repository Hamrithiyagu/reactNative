import {
    put,
    takeLatest
} from "redux-saga/effects";
import * as searchCreators from "../actionCreators/search"


import {
    GET_SEARCH
} from "../actionTypes/search";

let URI = "http://172.16.105.196:4000";

function* getsearch(action) {
    try {
        let search = yield fetch(`${URI}/products?q=${action.searchText}&_page=${action.page}&_limit=${action.pageLimit}`).then(r => r.json());
        yield put(searchCreators.getsearchsuccess(search))
    } catch (error) {
        yield put(searchCreators.getsearchfailure(error))
    }
}



export function* searchWatchers() {
    yield [
        takeLatest(GET_SEARCH, getsearch)
    ]
}