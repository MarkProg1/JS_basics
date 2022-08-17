/*
 * Array.prototype.sort(callback(currentEl,nextEl){})
 * - Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * - По умолчанию:
 * .... - Сортирует по возрастанию
 * .... - приводит элементы к строке и сортирует по unicode
 */

const numbers = [1, 9, 6, 2, 3];

// numbers.sort();
// console.log("numbers", numbers);

const letters = ["b", "B", "a", "A"];
// letters.sort();
// console.log("letters ", letters);

/*
 * compareFunction - функция сравнения ( callback)
 * Элементы массива сортируются в соответствии с её возвращенным значением
 * - если  compareFunction(A,B) меньше 0 , сортировка поставит A перед B
 * - если  compareFunction(A,B) больше 0 , сортировка поставит B перед A
 * - если  compareFunction(A,B) вернет 0, сортировка оставит A и B на
 неизменными по отношению друг к другу, но отсортирует их по отношению 
 ко всем другим элементам.
*/

// numbers.sort((curEl, nextEl) => {
//     return nextEl - curEl;
// });

// console.log(numbers);

/*
 * Как сделать копию масива чтобы не сортировать оригинальный
 * - Array.prototype.slice()
 * - Операция spread
 */

const copy = [...numbers];
copy.sort();
// console.log("copy ", copy);
// console.log("numbers ", numbers);

/*
 * Кастомная сортировка сложних типов
 */

const players = [
    {
        id: "player-1",
        name: "Mango",
        timePlayed: 310,
        points: 54,
        online: false,
    },
    { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
    { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
    {
        id: "player-4",
        name: "Ajax",
        timePlayed: 150,
        points: 71,
        online: false,
    },
    {
        id: "player-5",
        name: "Chesly",
        timePlayed: 80,
        points: 48,
        online: true,
    },
];

// По игровому времени

const sortedBybestPlayers = [...players].sort(
    (a, b) => b.timePlayed - a.timePlayed
);
// console.log(sortedBybestPlayers);

/*
 * Array.prototype.flat(depth)
 * - Разглаживает массив до указаной глубины
 * - По умолчанию глубина 1
 */

const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat(2));

/*
 * Array.prototype.flatMap(callback)
 * - Комбинация map + flat
 */

const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },

    { id: "001", likes: 2, tags: ["html", "css"] },

    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },

    { id: "003", likes: 8, tags: ["css", "react"] },

    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const tags = tweets.flatMap((t) => t.tags);
console.log(tags);
