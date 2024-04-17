import {
    ADD_CURRENT_USER,
    ADD_RESULT_SEARCH,
    NEW_CURRENT_PAGE,
} from './types/search.types';

export const AddResultSearch = (content) => ({
    type: ADD_RESULT_SEARCH,
    payload: {
        content,
    },
});

export const AddCurrentUser = (user) => ({
    type: ADD_CURRENT_USER,
    payload: {
        user,
    },
});

export const NewCurrentPage = (number) => ({
    type: NEW_CURRENT_PAGE,
    payload: number,
});
