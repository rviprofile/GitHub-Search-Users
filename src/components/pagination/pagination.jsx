import * as S from './pagination.styles.js';
import { sweepNumberToArray } from '../../helpers/sweepNumberToArray.js';
import { store } from '../../store/store.js';
import { useState } from 'react';

export const Pagination = () => {
    const [allUsers, setAllUsers] = useState(50);
    let usersPerPage = 10;
    let currentPage = 5;
    let howManyPages = Math.ceil(allUsers / usersPerPage);

    store.subscribe(() => {
        setAllUsers(store.getState().serach.resultSearch.content.total_count);
    });
    return (
        <S.PaginationBlock>
            {/* Если страница не первая, есть кнопка "Назад" */}
            {sweepNumberToArray(howManyPages).includes(currentPage - 1) ? (
                <S.PaginationItem>Назад</S.PaginationItem>
            ) : (
                ''
            )}
            {sweepNumberToArray(howManyPages).map((i) => {
               if(i === currentPage) {
                return <S.ActivePaginationItem>{i}</S.ActivePaginationItem>
               } else {
                return <S.PaginationItem>{i}</S.PaginationItem>
               }
            })}

            {/* Если страница не последняя, есть кнопка "Вперед" */}
            {sweepNumberToArray(howManyPages).includes(currentPage + 1) ? (
                <S.PaginationItem>Вперед</S.PaginationItem>
            ) : (
                ''
            )}
        </S.PaginationBlock>
    );
};
