// Функция принимает число, например 7.
// Возвращает массив, например [1, 2, 3, 4, 5, 6, 7]
export function sweepNumberToArray(numb) {
    let arr = [];
    for (let i = 1; i <= numb; i++) {
        arr.push(i);
    }
    return arr;
}
