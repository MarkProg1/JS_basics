import itemsTemplate from "../templates/gallery-item.hbs";
console.log(itemsTemplate);

const markup = itemsTemplate({
    items: ["HTML", "CSS", "JS", "React"],
});
// const tech = ["HTML", "CSS", "JS", "React"];

// const galleryRef = document.querySelector(".js-gallery");

// const markup = tech.map((el) => `<li><a href="">${el}</a></li>`).join("");
// console.log(markup);
// galleryRef.insertAdjacentHTML("beforeend", markup);
