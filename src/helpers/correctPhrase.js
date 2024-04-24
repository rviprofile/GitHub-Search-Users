export default function correctPhrase(number) {
    let lastDigit = String(number).substr(-1);
    let ending = () => {
        switch (lastDigit) {
            case '1': {
                return 'пользователь';
            }
            case '2':
            case '3':
            case '4': {
                return 'пользователя';
            }
            default: {
                return 'пользователей';
            }
        }
    };
    let start = () => {
        switch (lastDigit) {
            case '1': {
                return 'Найден';
            }
            default: {
                return 'Найдено';
            }
        }
    };
    return `${start()} ${number} ${ending()}`;
}
