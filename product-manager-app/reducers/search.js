import { GET_SEARCH, GET_SEARCH_SUCCESS, GET_SEARCH_FAILURE } from '../actionTypes/search';

export default (prevState = { searchsuccess: [], limit: 8, isLoading: false }, action) => {
	switch (action.type) {
		case GET_SEARCH:
			return {
				...prevState,
				page: action.page,
				page: action.page,
				searchText: action.searchText,
				isLoading: true
			};
		case GET_SEARCH_SUCCESS:
			const { searchsuccess, page } = prevState;
			return {
				...prevState,
				isLoading: false,
				searchsuccess: page === 1 ? action.searchsuccess : searchsuccess.concat(action.searchsuccess)
			};
		case GET_SEARCH_FAILURE:
			return {
				...prevState,
				isLoading: false,
				error: action.error
			};
		default:
			return prevState;
	}
};
