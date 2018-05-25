import {
    GET_SEARCH,
    GET_SEARCH_SUCCESS,
    GET_SEARCH_FAILURE
} from "../actionTypes/search";

export function getsearch(page, pageLimit, searchText) {
    return{
        type: GET_SEARCH,
        page,
        pageLimit,
        searchText
    }
}

export function getsearchsuccess(searchsuccess) {
    return{
        type: GET_SEARCH_SUCCESS,
        searchsuccess
    }
}

export function getsearchfailure(error){
    return{
        type: GET_SEARCH_FAILURE,
        error
    }
}