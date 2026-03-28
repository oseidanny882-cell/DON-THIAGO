// 1. You MUST define the variable 'bar' first
const bar = document.getElementById('bar'); 
const close = document.getElementById('close'); 
const nav = document.getElementById('navbar');

// 2. Now you can use 'bar'
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
};

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
};


