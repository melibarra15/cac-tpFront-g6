const intro = document.querySelector('.intro');

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        intro.classList.add('display-none');
    }, 5000);
})

const header = document.querySelector('.header');

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if (top >=50){
        header.classList.add('active')
    }else{
        header.classList.remove('active');
    }
}