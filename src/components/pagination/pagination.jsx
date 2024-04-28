import * as S from './pagination.styles.js';
import { sweepNumberToArray } from '../../helpers/sweepNumberToArray.js';
import { store } from '../../store/store.js';
import { useState } from 'react';
import {
    nextPage,
    prevPage,
    choosePage,
} from './../../helpers/moveBetweenPages.js';

export const Pagination = () => {
    // Состояние с количеством всех найденых пользователей
    const [allUsers, setAllUsers] = useState(0);

    // Состояние с номером активной страницы
    const [currentPage, setCurrentPage] = useState(1);

    // Состояние со статусом загрузки
    const [isLoading, setIsLoading] = useState(false);

    // Сколько пользователей показано на странице
    let usersPerPage = 10;

    // Сколько страниц возможно получить
    let howManyPages = Math.ceil(allUsers / usersPerPage);

    // При обновлении store
    store.subscribe(() => {
        // Сохраняем количество всех найденых пользователей
        if (store.getState().search.resultSearch) {
            setAllUsers(
                store.getState().search.resultSearch.content.total_count
            );
        }

        // Сохраняем номер активной страницы
        setCurrentPage(store.getState().currentPageAndSort.currentPage);

        // Следим за статусом загрузки
        setIsLoading(store.getState().isLoading.status);
    });

    if (isLoading === false) {
        return (
            <S.PaginationBlock>
                {/* Если страница не первая, есть кнопка "Назад" */}
                {sweepNumberToArray(howManyPages).includes(currentPage - 1) ? (
                    <S.PaginationItem
                        key={'under'}
                        onClick={() => prevPage(currentPage)}
                    >
                        <S.MoveImg src="./prev.svg" />
                    </S.PaginationItem>
                ) : (
                    ''
                )}

                {sweepNumberToArray(howManyPages).map((i) => {
                    // Если кнопка страницы соответсвует активной, показан стиль с активной кнопкой
                    if (i === currentPage) {
                        return (
                            <S.ActivePaginationItem key={i}>
                                {i}
                            </S.ActivePaginationItem>
                        );
                        // Если кнопка дальше от активной на 6 или больше в любую сторону, она не показана
                    } else if (i - currentPage > 6 || currentPage - i > 6) {
                        return '';
                        // В других случаях показана обычная кнопка страницы
                    } else {
                        return (
                            <S.PaginationItem
                                key={i}
                                onClick={() => choosePage(i)}
                            >
                                {i}
                            </S.PaginationItem>
                        );
                    }
                })}

                {/* Если страница не последняя, есть кнопка "Вперед" */}
                {sweepNumberToArray(howManyPages).includes(currentPage + 1) ? (
                    <S.PaginationItem
                        key={'next'}
                        onClick={() => nextPage(currentPage)}
                    >
                        <S.MoveImg src="./next.svg" />
                    </S.PaginationItem>
                ) : (
                    ''
                )}
            </S.PaginationBlock>
        );
    }
};
