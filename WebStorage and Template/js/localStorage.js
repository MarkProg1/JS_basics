// ==========================================================
// Теория
// Запись

// const settings = {
//     theme: "dark",
//     fontSize: 14,
// };

// localStorage.setItem("settings", JSON.stringify(settings));

/*
 * Чтение
 * Если записи с таким ключем нету, вернет null.
 */
// const value = localStorage.getItem("settings");
// console.log(JSON.parse(value));

// удаление

// localStorage.removeItem("settings");

// ==========================================================

const refs = {
    form: document.querySelector(".js-feedback-form"),
    textarea: document.querySelector(".js-feedback-form textarea"),
};

populateMessage();

refs.form.addEventListener("submit", handleFormSubmit);
refs.textarea.addEventListener("input", handleTextareaInput);

function handleFormSubmit(event) {
    event.preventDefault();

    event.currentTarget.reset();
    localStorage.removeItem("feedback-massage");
}

function handleTextareaInput(event) {
    localStorage.setItem("feedback-massage", event.currentTarget.value);
}

function populateMessage() {
    const localStorageMassage = localStorage.getItem("feedback-massage");

    if (localStorageMassage) {
        refs.textarea.value = localStorageMassage;
    }
}
