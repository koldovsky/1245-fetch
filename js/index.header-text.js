const headerTitle = document.querySelector('.header__title');

const greetings = [
    'HELLO!',
    'HI!',
    'HOLA!',
    'GREETINGS',
    'ВІТАЮ!',
    'ПРИВІТ!'
];

const getRandomEl = (arr) => arr[ Math.floor(Math.random() * arr.length) ];

// Не рекомендовано
// headerTitle.style.color = 'red';

const toggleHighlight = () => headerTitle.classList.toggle('highlight');
setInterval(toggleHighlight, 2000);


headerTitle.innerText = getRandomEl(greetings);
