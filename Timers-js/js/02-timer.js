const refs = {
    startBtn: document.querySelector(".js-start-button"),
    stopBtn: document.querySelector(".js-stop-button"),
    clockface: document.querySelector(".clockface"),
};

const timer = {
    timerId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        const startTime = new Date();

        this.timerId = setInterval(() => {
            const currentTime = new Date();

            updateClockface(currentTime - startTime);
        }, 1000);
    },

    stop() {
        clearInterval(this.timerId);
        this.timerId = null;
        this.isActive = false;
        updateClockface(0);
    },
};

refs.startBtn.addEventListener("click", timer.start.bind(timer));

refs.stopBtn.addEventListener("click", timer.stop.bind(timer));

function updateClockface(time) {
    const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );

    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}

function pad(value) {
    return String(value).padStart(2, "0");
}
