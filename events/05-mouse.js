/*
 * mouseenter и mouseleave
 * mouseover и mouseout
 * mousemove (chatty event - болтливое событие)
 */

const boxRef = document.querySelector(".js-box");

boxRef.addEventListener("mouseenter", (event) => {
    // console.log(event);
    event.target.classList.add("box--active");
});

boxRef.addEventListener("mouseleave", (event) => {
    event.target.classList.remove("box--active");
});

boxRef.addEventListener("mousemove", (event) => {
    console.log(event);
});
