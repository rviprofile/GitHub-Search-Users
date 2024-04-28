import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/search.reducer';
import currentPageAndSortReducer from './reducers/currentPageAndSort.reducer';
import isLoadingReducer from './reducers/isLoading.reducer';

export const store = configureStore({
    reducer: {
        // Результат поиска
        search: searchReducer,
        // Активная страница и сортировка
        currentPageAndSort: currentPageAndSortReducer,
        // Статус загрузки
        isLoading: isLoadingReducer,
    },
});
