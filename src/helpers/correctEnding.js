export default function correctEnding(number) {
    let lastDigit = String(number).substr(-1);
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
}
