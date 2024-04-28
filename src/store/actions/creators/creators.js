import { type } from '@testing-library/user-event/dist/type';
import {
    ADD_CURRENT_USER,
    ADD_RESULT_SEARCH,
    NEW_CURRENT_PAGE,
    IS_LOADING,
    IS_NOT_LOADING,
    NEW_SORT,
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

export const isLoadingCreator = () => ({
    type: IS_LOADING,
    payload: true,
});

export const isNotLoadingCreator = () => ({
    type: IS_NOT_LOADING,
    payload: false,
});

export const newSort = (sort) => ({
    type: NEW_SORT,
    payload: sort,
});
