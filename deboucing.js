// Debouncing Example in JavaScript

function debounce(func, delay) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Example usage
const handleResize = () => {
    console.log('Window resized:', new Date().toISOString());
};

const debouncedResize = debounce(handleResize, 300);

window.addEventListener('resize', debouncedResize);
// This will log the resize event only after 300ms of inactivity
// You can test it by resizing the window quickly
// and observing that the log appears only once after you stop resizing.
// This is useful for performance optimization in scenarios like window resizing,
// where you don't want to trigger the event handler too frequently.
