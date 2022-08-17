/*Контекст ()
    - Контекст определяется в МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.
    - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
*/

// const user = {
//     tag: "Mango",
//     showTag() {
//         console.log("this: ", this);
//         console.log("this.tag: ", this.tag);
//     },
// };
// // user.showTag();

// Вызов без контекста

// // если use strict - this будет undefined
// const foo = function () {
//     console.log("this: ", this);
// };

// // foo();

// Как метод объекта, но объявлена как внешняя функция. В контексте объекта.

// const showTag = function () {
//     console.log("this: ", this);
//     console.log("this.tag: ", this.tag);
// };

// //showTag();

// const user = {
//     tag: "Mango",
// };

// user.showTag = showTag;

// user.showTag();

// Вызов без контекста, но объявлена как метод объекта. (Не важно где обьявил важно как вызвал)

// const user = {
//     tag: "Mango",
//     showTag() {
//         console.log("this: ", this);
//         console.log("this.tag: ", this.tag);
//     },
// };

// const outerShowTag = user.showTag;

// outerShowTag();

//Вызов функции в контексте другой функции

// const fn = function () {};

// fn.someMethod = function () {
//     console.log(this);
// };

// fn.someMethod();

// Контекст в callback-функциях

// const user = {
//     tag: "Mango",

//     showTag() {
//         console.log("this: ", this);
//         console.log("this.tag: ", this.tag);
//     },
// };

// const invokeAction = function (action) {
//     console.log(action);

//     action();
// };

// invokeAction(user.showTag);

// Практика

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         this.color = color;
//     };

//     const sweater = {
//         color: "teal",
//     };

//     sweater.changeColor = changeColor;
//     return sweater.changeColor;
// };

// const changeColor = makeChangeColor();

// changeColor("blue");

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         this.color = color;
//     };
//     return changeColor;
// };

// const hat = {
//     color: "blue",
//     changeColor: makeChangeColor(),
// };

// hat.changeColor("orange");
// console.log(hat.color);

// bind, apply, call

const showTag = function () {
    console.log("this: ", this);
    console.log("this.tag: ", this.tag);
};

const mango = {
    tag: "Mango",
};

// const poly = {
//     tag: "Poly",
// };
// // apply,call - вызывает функцию присваивая ей контекст объекта.

// showTag.call(poly);
// showTag.call(mango);

// // bind - создает копию функции и НАВСЕГДА привязывает переданый контекст
// const showMangoTag = showTag.bind(mango);
// showMangoTag();
