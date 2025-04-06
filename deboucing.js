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
// You can also use this debounce function for other events like scroll, input, etc.
// Just pass the event handler function and the delay time in milliseconds.
// Example for input event
const handleInput = (event) => {
    console.log('Input value:', event.target.value);
};
const debouncedInput = debounce(handleInput, 500);
const inputElement = document.querySelector('input');
inputElement.addEventListener('input', debouncedInput);
// This will log the input value only after 500ms of inactivity
// You can adjust the delay time according to your needs.
// This is a simple implementation of debounce function
// in JavaScript. You can customize it further based on your requirements.
// For example, you can add a leading edge option
// to execute the function immediately on the first call
// or you can add a trailing edge option
// to execute the function after the last call.
// You can also use libraries like lodash or underscore
// which provide built-in debounce functions with more features.
// In summary, debouncing is a technique to limit the rate
// at which a function is executed.
// It is useful for optimizing performance
// and reducing unnecessary function calls.
// You can implement your own debounce function
// or use existing libraries to achieve this.
// This is a simple example of debouncing in JavaScript.
// You can use this technique in various scenarios
// where you want to limit the frequency of function calls.
// You can also use this technique in combination
// with other techniques like throttling
// to achieve better performance and control over function execution.
// You can also use this debounce function
// in combination with other techniques like throttling
// to achieve better performance and control over function execution.
