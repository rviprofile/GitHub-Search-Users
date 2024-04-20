import axios from 'axios';
import { store } from '../store/store';
import { AddResultSearch } from '../store/actions/creators/search.creators';
import { clearConfigCache } from 'prettier';
const PORT = 'https://api.github.com/search/users?q=';

export default async function SearchByLogin(login) {
    const URL = PORT + login.trim();
    if (login.trim().length === 0) {
        console.log('Login value is empty');
        return;
    } else {
        try {
            const res = await axios.get(URL);
            console.log(`Request to ${URL}`);
            // Отправляем результат поиска в store
            store.dispatch(AddResultSearch(res.data));
        } catch (err) {
            console.log(err);
        }
    }
}
