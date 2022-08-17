/* ====================================
 * Прототип объекта
 * Object.create()
 * [[Prototype]] и __proto__
 * Цепочка прототипов.
 */

// __proto__ - ссылка на объект (базовый или тот, который указали мы)

// const objA = {
//     x: 10,
//     y: 5,
// };

const objB = {
    z: 3,
};

const objA = Object.create(objB);

objA.x = 1;
objA.y = 2;

/* ====================================
 * Правило поиска свойства в цепочке прототипов
 
 - Поиск идет до первого совпадения.
 - При отсутствии свойства во ВСЕХ объектах возвращает undefined
*/

console.log(objA.z);

/* ====================================
 * Основы ООП: класс, объект, интерфейс
 */

/*=====================================
 * Функции-конструкторы
 * Свойство Function.prototype
 
 - Именование с большой буквы (User, Hero etc.)
 - Название - имя существительное.
 - new - создает пустой объект.
 */

const Manager = function (name, sales) {
    this.name = name;
    this.sales = sales;

    // много объявлений (у каждого объекта своя такая же функция) много кушает памяти (плохой пример)
    // this.sell = function () {
    //     this.sales += 1;
    // };
};
// создается функция, сохраняется ссылка а не сама функция.
Manager.prototype.sell = function () {
    this.sales += 1;
};

const mango = new Manager("mango", 5);
console.log(mango);

// const poly = new Manager("poly", 10);
// console.log(poly);

mango.sell();
console.log(mango);
