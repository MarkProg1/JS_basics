// создается в памяти, не в DOM
const titleRef = document.createElement("h1");

titleRef.textContent = "Динамически созданый заголовок! Вау!";

titleRef.classList.add("site-title");

titleRef.id = "title";
