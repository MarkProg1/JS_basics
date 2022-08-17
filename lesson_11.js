/*
 * Перебирающие методы массивов.
 * Array.prototype.forEach(callback(currentValue,index,array),thisArg)
 * - Ничего не возвращает
 * - Поэлементно перебирает оригинальный массив
 * - Заменяет классический for, есть не нужно прерывать цикл
 * thisArg - контекст, в котором необходимо вызвать метод.
 */

const numbers = [5, 10, 15, 20, 25];

numbers.forEach(function (number, index, array) {
    //console.log(`number: ${number}`);
    //array[index] = 20;
});

//console.log(numbers);

/*
 * Array.prototype.map()
 * - Поэлементно перебирает оригинальный массив
 * - Не изменяет оригинальный массив
 * - Возврщает новый массив такой же длины
 */

const doubledNums = numbers.map(function (number) {
    //console.log(number);
    return number * 2;
});

// console.log(`numbers: ${numbers}`);
// console.log(`doubledNums: ${doubledNums}`);

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

/*
 * Получаем массив имен всех игроков
 */
const playerNames = players.map((player) => {
    //console.log(player);
    return player.name;
});

//console.log(`players ${playerNames}`);

/*
 * Увеличиваем кол-во поинтов каждого игрока на 10%
 */

const updatedPlayers = players.map((player) => {
    //console.log(player);
    return { ...player, points: player.points * 1.1 };
});

//console.table(updatedPlayers);

/*
 * Увеличиваем кол-во часов игрока по id
 */

const playerIdToUpdate = "player-3";

const updatedPlayer = players.map((player) => {
    if (player.id === playerIdToUpdate) {
        return {
            ...player,
            timePlayed: player.timePlayed + 100,
        };
    }
    return {
        ...player,
    };
});

//console.table(updatedPlayer);

/*
 * Array.prototype.filter()
 * - Поэлементно перебирает оригинальний массив
 * - Возвращает новый массив (с элементами или пустой массив)
 * - Добавляет в возвращаемый массив элементы коротые удовлетворяют 
 условию коллбэк-функции
 * .... - если коллбек вернул true элемент добавляется в возвращаемый массив
 * .... - если коллбек вернул false элемент НЕ добавляется в возвращаемый массив
*/

const filteredNumbers = numbers.filter((number) => {
    //console.log(number);
    return number < 15;
});

//console.log(`filtered Numbers: ${filteredNumbers}`);

/*
 * Получаем массив всех онлайн игроков
 */

const onlinePlayers = players.filter((player) => player.online);
//console.table(onlinePlayers);

/*
 * Получаем массив всех оффлайн игроков
 */

const offlinePlayers = players.filter((player) => !player.online);
//console.table(offlinePlayers);

/*
 * Получаем хардкорных игроков с временем больше 250.
 */

const hardcorePlayers = players.filter((player) => {
    return player.timePlayed > 250;
});

//console.table(hardcorePlayers);

/*
 * Array.ptototype.find()
 * - Поэлементно перебирает оригинальный массив
 * - Возвращает первый элемент удовлетворяющий условию или undefined
 */

const number = numbers.find((number) => number > 10);
// console.log(number);

/*
 * Ищем игрока по id
 */

const playerIdToFind = "player-3";
const playerWithId = players.find((player) => playerIdToFind === player.id);

//console.log(playerWithId);

/*
 * Ищем игрока по имени
 */

const playerNameToFind = "Poly";

const playerWithName = players.find(
    (player) => player.name === playerNameToFind
);
//console.log(playerWithName);

/*
 * Array.prototype.every()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если все элементы массива удовлетворяют условию
 */

const isAllOnline = players.every((player) => player.online);
//console.log(`isAllOnline: ${isAllOnline}`);

/*
 * Array.prototype.some()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если хотя бы элемент массива удовлетворяет условию
 */

const isAnyOnline = players.some((player) => player.online);
//console.log(`isAnyOnline: ${isAnyOnline}`);

const anyHardcorePlayers = players.some((player) => player.timePlayed > 400);
//console.log(`anyHardcorePlayers: ${anyHardcorePlayers}`);

/*
 * Array.prototype.reduce()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно
 * - Заменяет все на свете, но использовать нужно с умом
 */

// acc - передается на следующую итерацию (return acc)
const total = numbers.reduce((acc, number) => {
    //console.log(`number ${number}`);
    //console.log(`acc ${acc}`);

    return acc + number;
}, 0);

// console.log(total);

/*
 * Cчитаем общую зарплату.
 */
const salary = {
    mango: 100,
    poly: 50,
    ajax: 150,
};

const totalSalary = Object.values(salary).reduce((totalSalary, currSalary) => {
    return totalSalary + currSalary;
}, 0);
//console.log(totalSalary);

/*
 * Посчитать общее количество часов
 */

const totalHours = players.reduce((total, player) => {
    return total + player.timePlayed;
}, 0);

// console.log(totalHours);

/*
 * Считаем общую сумму товаров корзины
 */

const cart = [
    { label: "Apples", price: 100, quantity: 2 },

    { label: "Bananas", price: 120, quantity: 3 },

    { label: "Lemons", price: 70, quantity: 4 },
];

const totalAmount = cart.reduce((total, { price, quantity }) => {
    return total + price * quantity;
}, 0);

//console.log(totalAmount);

/*
 * Собираем все теги из твитов
 */

const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },

    { id: "001", likes: 2, tags: ["html", "css"] },

    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },

    { id: "003", likes: 8, tags: ["css", "react"] },

    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce((tags, tweet) => {
    //tags.push(...tweet.tags);
    return [...tags, ...tweet.tags];
}, []);

// console.log(allTags);

/*
 * Ведем статистику тегов
 */

const tagsStats = allTags.reduce((tagsCount, tag) => {
    // tagsCount.hasOwnProperty(tag)
    //     ? (tagsCount[tag] += 1)
    //     : (tagsCount[tag] = 1);

    // return tagsCount;

    return {
        ...tagsCount,
        [tag]: tagsCount[tag] ? tagsCount[tag] + 1 : 1,
    };
}, {});

// console.log(tagsStats);
