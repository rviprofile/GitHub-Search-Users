import { NEW_CURRENT_PAGE } from '../actions/creators/types/search.types';

const initialState = { currentPage: 1 };

export default function currentPageReducer(state = initialState, action) {
    switch (action.type) {
        case NEW_CURRENT_PAGE: {
            return { ...state, currentPage: action.payload };
        }
        default:
            return state;
    }
}
