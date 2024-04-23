import { NewCurrentPage } from '../store/actions/creators/search.creators';
import { store } from '../store/store';

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
