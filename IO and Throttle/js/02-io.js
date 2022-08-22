/*
 * InersectionObserver API
 * Callback params
 * Options: root, rootMargin, threshold
 *
 *
 */

// Box ${entry.target.textContent} пересекает Root

const options = {
    rootMargin: "100px",
    // threshold: [0, 0.25, 0.5, 0.75, 1],
};

const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(`Box ${entry.target.textContent} пересекает Root`);

            observer.disconnect();
        }
    });
}, options);

const boxRef = document.querySelector(".js-box");

io.observe(boxRef);
