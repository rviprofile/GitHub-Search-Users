import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/search.reducer';
import currentPageReducer from './reducers/currentPage.reducer';
import isLoadingReducer from './reducers/isLoading.reducer';

export const store = configureStore({
    reducer: {
        // Результат поиска
        search: searchReducer,
        // Активная страница
        currentPage: currentPageReducer,
        // Статус загрузки
        isLoading: isLoadingReducer,
    },
});
