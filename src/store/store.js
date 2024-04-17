import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/search.reducer';

export const store = configureStore({
    reducer: {
        serach: searchReducer,
    },
});
