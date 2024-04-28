import { useState } from 'react';
import { NewCurrentPage, newSort } from '../../store/actions/creators/creators';
import { store } from '../../store/store';
import * as S from './sortButton.styles';

export const SortButtonRepositories = ({ purpose }) => {
    // Функция после нажатия на кнопку сортировки
    function handleSort(sort) {
        // Активная страница в store теперь 1
        store.dispatch(NewCurrentPage(1));
        // Значение сортировки в store теперь 'repositories'
        // Это запустит новое обращение к API
        store.dispatch(newSort(sort));
    }

    const [currentSort, setCurentSort] = useState();

    store.subscribe(() => {
        setCurentSort(store.getState().currentPageAndSort.sort);
    });

    return (
        <S.SortButton onClick={() => handleSort(purpose)} isActive={currentSort === purpose}>
            Репозиториям
        </S.SortButton>
    );
};
