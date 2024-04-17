import { ADD_CURRENT_USER, ADD_RESULT_SEARCH } from './types/search.types';

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
