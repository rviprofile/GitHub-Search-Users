import {
    ADD_CURRENT_USER,
    ADD_RESULT_SEARCH,
} from './../actions/creators/types/search.types';

const initilState = {};

export default function searchReducer(state = initilState, action) {
    switch (action.type) {
        case ADD_CURRENT_USER: {
            return { ...state, currentUser: action.payload };
        }
        case ADD_RESULT_SEARCH: {
            return { ...state, resultSearch: action.payload };
        }
        default:
            return state;
    }
}
