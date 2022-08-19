/*
 * Открыть и закрыть по кнопке
 * Закрыть по клику в бекдроп
 * Закрыть по ESC
 */

//show-modal

const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const closeModalBtn = document.querySelector(
    'button[data-action="close-modal"]'
);

openModalBtn.addEventListener("click", () => {
    document.body.classList.add("show-modal");
});

closeModalBtn.addEventListener("click", () => {
    document.body.classList.remove("show-modal");
});
