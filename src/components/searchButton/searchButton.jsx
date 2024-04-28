import { useEffect, useState } from 'react';
import SearchByLogin from '../../API/searchByLogin';
import { NewCurrentPage } from '../../store/actions/creators/creators';
import { store } from '../../store/store';
import * as S from './searchButton.styles';

export const SearchButton = ({ login }) => {
    // Функция после нажатия на "Поиск"
    function handleClickButton() {
        if (login) {
            // Обращение к API
            SearchByLogin(login);
            // Страница поиска в store теперь 1
            store.dispatch(NewCurrentPage(1));
        }
    }
    // Состояние со страницей поиска
    const [currentPage, setCurrentPage] = useState(1);
    // Состояние с сортировкой
    const [currentSort, setCurrentSort] = useState();
    // При каждом обновлении store, обновляем локальное состояние со страницей поиска или сортировкой
    store.subscribe(() => {
        setCurrentPage(store.getState().currentPageAndSort.currentPage);
        setCurrentSort(store.getState().currentPageAndSort.sort);
    });
    // Если значение со страницей поиска или сортировки изменились, обращаемся к API используя логин
    useEffect(() => {
        // Обращение к API
        SearchByLogin(login);
    }, [currentPage, currentSort]);

    return (
        <S.SearchButton onClick={() => handleClickButton(login)}>
            Поиск
        </S.SearchButton>
    );
};
