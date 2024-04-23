import { useEffect, useState } from 'react';
import SearchByLogin from '../../API/searchByLogin';
import { NewCurrentPage } from '../../store/actions/creators/search.creators';
import { store } from '../../store/store';
import * as S from './searchButton.styles';

export const SearchButton = ({ login }) => {
    // Функция после нажатия на "Поиск"
    function handleClickButton() {
        if (login) {
            // Обращение к API
            SearchByLogin(login);
            // Страница поиска теперь 1
            store.dispatch(NewCurrentPage(1));
        }
    }

    const [currentPage, setCurrentPage] = useState(1);

    store.subscribe(() => {
        setCurrentPage(store.getState().currentPage.currentPage);
    });

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
