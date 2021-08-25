const hamburger= document.querySelector('.hamburger');
const menu= document.querySelector('.menu-slide');
const header= document.querySelector('.header');
const lis =document.querySelector('.dissapear-me');
let lastScrollTop=0;

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
});
lis.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
});
//show header when scrolling up!!

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
    if(scrollTop> lastScrollTop){
        header.style.top="-80px";  
        menu.style.top="-10px";  
    } else {
        header.style.top="0";
        menu.style.top="70px";
    }
    lastScrollTop=scrollTop;
})