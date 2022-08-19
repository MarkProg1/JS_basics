/*
 * Типы событий: keypress, keydown, keyup
 * Ограничения keypress
 * Свойства объекта события клавиатуры
 */

const outputRef = document.querySelector(".js-output");
const clearRef = document.querySelector(".js-clear");

window.addEventListener("keydown", onKeyPress);

clearRef.addEventListener("click", onClearOutput);

function onKeyPress(event) {
    // console.log("event.key", event.key);
    // console.log("event.code", event.code);
    outputRef.textContent += event.key;
}

function onClearOutput() {
    outputRef.textContent = "";
}
