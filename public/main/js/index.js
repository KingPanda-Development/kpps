let navbar = document.querySelector('.header');
let burger = document.querySelector('.burger');
let body = document.querySelector('body');
let backgroundClick = document.querySelector('.clickBackground');
let background = document.querySelector('.container');
let eachNav = document.querySelectorAll(".eachNav");
let background2 = document.querySelector('.print');
let h2 = document.querySelectorAll('.h2About');

function buttonClick() {
    if(body.style.overflow === "hidden") {    
        body.style.overflow = "unset";
    } else {
        body.style.overflow = "hidden";
    }
    navbar.classList.toggle('headerActive');
    burger.classList.toggle('burgerActive');
    backgroundClick.classList.toggle('clickBackgroundActive')
}

function responsiveBgClick() {
    backgroundClick.classList.remove('clickBackgroundActive')
    navbar.classList.remove('headerActive');
    burger.classList.remove('burgerActive');
    body.style.overflow = "unset"
}

window.addEventListener('scroll', () => {
    background.style.opacity = (1 - window.pageYOffset / 500)
    let kurang = window.pageYOffset / (500 * 10) - 0.3;
    background2.style.opacity = window.pageYOffset >= 3000 ? 1 : kurang

    navbar.classList.toggle('sticky', window.pageYOffset > 0)
})

eachNav.forEach(nav => {
    nav.addEventListener('click', () => {
        let checkNavbar = navbar.className.split(" ")
        if(checkNavbar.some(m => m === "headerActive")) {
            if(body.style.overflow === "hidden") {    
                body.style.overflow = "unset";
            } else {
                body.style.overflow = "hidden";
            }
            
            navbar.classList.toggle('headerActive');
            burger.classList.toggle('burgerActive');
            backgroundClick.classList.toggle('clickBackgroundActive');
        }
    })    
})

/* Loading */
setTimeout(() => {
    let loading = document.querySelector('.loading')
    body.style.overflow = "unset"
    loading.style['z-index'] = -1;
    loading.style.opacity = 0;
}, 3000)

/* Aos */
AOS.init({
  duration: 500,
  offset: 320,
  easing: 'ease'
})

let listener = ['load','resize','scroll']
for(let i = 0; i < listener.length; i++) {
    
    window.addEventListener(listener[i], () => {
        let countListener = 0;
        if(listener[i] === "scroll") {
            if(countListener >= 10) {
                AOS.refresh();
                countListener = 0;
            }
            countListener++
        }
        AOS.refresh();
    })

}