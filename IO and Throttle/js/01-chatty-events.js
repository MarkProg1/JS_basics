/*
 * Chatty events
 * Приемы throttling debouncing Lodash
 */

/*
 * Mousemove
 */
const refs = {
    coords: document.querySelector(".js-coords"),
    input: document.querySelector(".js-input"),
    output: document.querySelector(".js-output"),
};

const counters = {
    mouse: 0,
    input: 0,
};

const mouseMoveHandler = _.throttle((event) => {
    counters.mouse += 1;
    refs.coords.textContent = `Кол-во вызовов callback-функции: ${counters.mouse},
    X: ${event.clientX},
    Y: ${event.clientY}`;
}, 100);

window.addEventListener("mousemove", mouseMoveHandler);

/*
 * Input
 */

const inputHandler = _.debounce((event) => {
    counters.input += 1;

    refs.output.textContent = `
    Кол-во вызовов callback-функции: ${counters.input}`;
}, 300);

// console.log(refs.input);
refs.input.addEventListener("input", inputHandler);
