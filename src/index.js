const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyEl = document.querySelector('body');
const btn = document.querySelectorAll('button');
let intervalId = '';

const btnActive = btn[0].addEventListener('click', event => {
    intervalId = setInterval(() => {
        bodyEl.style.backgroundColor = `${
            colors[randomIntegerFromInterval(0, 5)]
        }`;
        if (intervalId) {
            btn[0].setAttribute('disabled', 'true');
        }
    }, 1000);
});
btn[1].addEventListener('click', event => {
    clearInterval(intervalId);
    if (event) {
        btn[0].removeAttribute('disabled');
    }
});
