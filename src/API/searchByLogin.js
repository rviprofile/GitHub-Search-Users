import axios from 'axios';
import { store } from '../store/store';
import { AddResultSearch } from '../store/actions/creators/search.creators';
const PORT = 'https://api.github.com/search/users?q=';

export default async function SearchByLogin(login) {

    let currentPage = store.getState().currentPage.currentPage
    
    if (!login) {
        return 'login empty';
    }
    try {
        const res = await axios.get(PORT + login + `&per_page=10&page=${currentPage}`);
        // Отправляем результат поиска в store
        store.dispatch(AddResultSearch(res.data));
    } catch (err) {
        console.log(err);
    }
}
