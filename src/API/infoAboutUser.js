import axios from 'axios';

export default async function infoAboutUser(PORT) {
    if (!PORT) {
        console.log('PORT is empty');
    }
    try {
        const res = await axios.get(PORT);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}
