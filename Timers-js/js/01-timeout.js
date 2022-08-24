/*
 * Метод setTimeout()
 */

// setTimeout(() => {
//     console.log("Лог при вызове  callback-функции через 3 сек.");
// }, 3000);

/*
 * Асинхронность кода
 */

// console.log("hi");

// setTimeout(() => {
//     console.log("Лог при вызове  callback-функции через 3 сек.");
// }, 3000);

// console.log("hi, again");

/*
 * Очистка таймаута с clearTimeout()
 */

// const logger = (time) => {
//     console.log(`Лог через ${time}ms, потому что не отменили таймаут.`);
// };

// const timerId = setTimeout(logger, 2000, 2000);

// console.log(timerId);

// const shouldCancelTimer = Math.random() > 0.3;
// shouldCancelTimer ? clearTimeout(timerId) : console.log("повезло");

/*
 * setInterval()
 */

// const logger = (time) => console.log(`Лог каждые ${time}ms - ${Date.now()}`);

// setInterval(logger, 2000, 2000);

/*
 * Очистка интервала с clearInterval()
 */

console.log("До");

let subscriptionCounter = 0;
let hasSubscribed = false;

const intervalId = setInterval(() => {
    if (subscriptionCounter === 3) {
        clearInterval(intervalId);
        return;
    }
    console.log("Подпишись на рассылку!");
    subscriptionCounter += 1;
}, 1000);
