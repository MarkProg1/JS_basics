const refs = {
    tags: document.querySelector(".js-tags"),
    activeTagOutput: document.querySelector(".js-active-tag"),
};

refs.tags.addEventListener("click", onTagsClick);

function onTagsClick(event) {
    // console.log(event.target);
    if (event.target.nodeName !== "BUTTON") {
        return;
    }

    const nextActiveTag = event.target;

    setActiveTag(nextActiveTag);

    updateOutput(nextActiveTag.dataset.value);
}

function setActiveTag(nextActiveTag) {
    const currentActiveTag = refs.tags.querySelector(".tags__btn--active");

    if (currentActiveTag) {
        currentActiveTag.classList.remove("tags__btn--active");
        console.log(currentActiveTag);
    }
    nextActiveTag.classList.add("tags__btn--active");
}

function updateOutput(value) {
    refs.activeTagOutput.textContent = value;
}
