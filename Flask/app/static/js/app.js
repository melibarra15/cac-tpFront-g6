const intro = document.querySelector('.intro');

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        intro.classList.add('display-none');
    }, 5000);
})