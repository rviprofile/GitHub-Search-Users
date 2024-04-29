import axios from 'axios';
import { store } from '../store/store';
import { AddCurrentUser } from '../store/actions/creators/creators';

// Функция загружает информацию о конкретном пользователе и отправляет в store
export default async function infoAboutUser(url) {
    try {
        console.log('Request to ' + url);
        // Обращаемся к API по URL
        const res = await axios.get(url);
        // Сохраняем результат в store
        store.dispatch(AddCurrentUser(res.data));
    } catch (err) {
        console.log(err);
    }
}
