/*
 * window(document).querySelector(selector)     selector:any
 * window(document).querySelectorAll(selector)    selector:any
 */

const linkRef = document.querySelector(".nav__link");
//console.dir(linkRef);

const linksRef = document.querySelectorAll(".nav__link");
// console.log(linksRef);

/*
 * Свойства (Атрибуты)
 */

const titleRef = document.querySelector(".page-title");

//titleRef.textContent = "Привет, Добро пожаловать";

titleRef.style.color = "palevioletred";

// elem.hasAttribute(name), elem.getAttribute(name)
// elem.setAttribute(name), elem.removeAttribute(name)
// elem.attributes

// not working :(
//console.dir(linkRef);
//console.log(linkRef.getAttribute("text"));
//titleRef.setAttribute("textContent", "Привет, Добро пожаловать");

/*
 * classList
 */

const activeLinkRef = document.querySelector(".nav__link--active");
// console.log(activeLinkRef);

activeLinkRef.classList.add("nav__link--primary");

activeLinkRef.classList.remove("nav__link--primary");
