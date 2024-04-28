import {
    NEW_CURRENT_PAGE,
    NEW_SORT,
} from '../actions/creators/types/search.types';

const initialState = { currentPage: 1, sort: undefined };

export default function currentPageAndSortReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case NEW_CURRENT_PAGE: {
            return { ...state, currentPage: action.payload };
        }
        case NEW_SORT: {
            return { ...state, sort: action.payload };
        }
        default:
            return state;
    }
}
