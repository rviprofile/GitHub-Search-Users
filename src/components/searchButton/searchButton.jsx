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
    // При каждом обновлении store, обновляем локальное состояние со страницей поиска
    store.subscribe(() => {
        setCurrentPage(store.getState().currentPage.currentPage);
    });
    // Если значение со страницей поиска изменилось, обращаемся к API используя логин
    useEffect(() => {
        // Обращение к API
        SearchByLogin(login);
    }, [currentPage]);

    return (
        <S.SearchButton onClick={() => handleClickButton(login)}>
            Поиск
        </S.SearchButton>
    );
};
