/*
 * Intersection Observer с unobserve (один на все)
 */

// const images = document.querySelectorAll(".feed img");

// const io = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             console.log(entry.target);
//             const image = entry.target;
//             image.src = image.dataset.lazy;

//             observer.unobserve(image);
//         }
//     });
// });

// images.forEach((image) => io.observe(image));

/*
 * Intersection Observer с disconnect (на каждый свой)
 */

const images = document.querySelectorAll(".feed img");

const onEntry = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const image = entry.target;

            image.src = image.dataset.lazy;

            observer.disconnect();
        }
    });
};

const lazyload = (target) => {
    const io = new IntersectionObserver(onEntry);
    io.observe(target);
};

images.forEach((image) => lazyload(image));
