import {
    IS_LOADING,
    IS_NOT_LOADING,
} from '../actions/creators/types/search.types';

let initialState = { status: false };

export default function isLoadingReducer(state = initialState, action) {
    switch (action.type) {
        case IS_LOADING: {
            return { ...state, status: action.payload };
        }
        case IS_NOT_LOADING: {
            return { ...state, status: action.payload };
        }
        default:
            return state;
    }
}
