import useCounter from "./useCounter.js";

const { getCounter, increment, decrement } = useCounter();

// DOM Manipulation
let counterEl = document.getElementById("counter");
let decrementBtn = document.getElementById("decrementBtn");
let incrementBtn = document.getElementById("incrementBtn");

function refreshCounter() {
    counterEl.innerText = getCounter();
}

refreshCounter();

decrementBtn.addEventListener("click", () => {
    decrement();
    refreshCounter();
});
incrementBtn.addEventListener("click", () => {
    increment();
    refreshCounter();
});



