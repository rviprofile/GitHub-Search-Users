import axios from 'axios';
import { store } from '../store/store';
import {
    AddResultSearch,
    isLoadingCreator,
    isNotLoadingCreator,
} from '../store/actions/creators/creators';
const PORT = 'https://api.github.com/search/users?q=';

export default async function SearchByLogin(login) {
    // Актуальная страница в поиске
    const currentPage = store.getState().currentPage.currentPage;
    // URL для запроса
    const URL = () => {
        // Если страница поиска больше 1, она прописана в URL
        if (currentPage > 1) {
            return PORT + login.trim() + `&page=${currentPage}`;
        } else {
            return PORT + login.trim();
        }
    };

    if (login.trim().length === 0) {
        console.log('Login value is empty');
        return;
    } else {
        try {
            // Статус загрузки - true
            store.dispatch(isLoadingCreator());
            console.log(`Request to ${URL()}`);
            const res = await axios.get(URL());
            // Отправляем результат поиска в store
            store.dispatch(AddResultSearch(res.data));
            // Статус загрузки - false
            store.dispatch(isNotLoadingCreator());
        } catch (err) {
            console.log(err);
        }
    }
}
