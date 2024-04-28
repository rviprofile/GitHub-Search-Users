import { NewCurrentPage } from '../store/actions/creators/creators';
import { store } from '../store/store';

// Функции для обновления активной страницы в store

export function nextPage(currentPage) {
    store.dispatch(NewCurrentPage(currentPage + 1));
    window.scrollTo(0, 0);
}

export function prevPage(currentPage) {
    store.dispatch(NewCurrentPage(currentPage - 1));
    window.scrollTo(0, 0);
}

export function choosePage(n) {
    store.dispatch(NewCurrentPage(n));
    window.scrollTo(0, 0);
}
