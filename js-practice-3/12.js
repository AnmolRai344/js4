function throttle(callback, delay) {
    let lastExecution = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastExecution >= delay) {
            lastExecution = now;
            callback.apply(this, args);
        }
    };
}

const handleScroll = throttle(() => {
    console.log("Scroll event handled");
}, 1000);

handleScroll();
handleScroll();
handleScroll();