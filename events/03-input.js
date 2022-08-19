/*
 * События input и change
 * Чекбоксы и свойство checked
 */

const btnRef = document.querySelector(".js-button");
const inputRef = document.querySelector(".js-input");
const nameLabelRef = document.querySelector(".js-button > span");
const licenRef = document.querySelector(".js-license");

//console.log(nameLabelRef);
inputRef.addEventListener("input", handlerInputChange);

licenRef.addEventListener("change", handlerLicenseChange);

function handlerInputChange(event) {
    nameLabelRef.textContent = event.target.value || "аноним";
}

function handlerLicenseChange(event) {
    //console.log(event);

    btnRef.disabled = !event.target.checked;
}
