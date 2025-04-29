let h2About = document.querySelectorAll(".h2About");
let body2 = document.querySelector('body');
let container = document.querySelector('.container');
let aboutus = document.querySelector('.aboutus');
let card = document.querySelectorAll('.card');
let cards = document.querySelector(".cards");
let commandP = document.querySelector('.commandP');
let print = document.querySelector('.print');
let footer = document.querySelector('footer');

let sunIcon = document.querySelectorAll(".sunmode");
let path = document.querySelectorAll("path");

let storage = localStorage.getItem('theme');
if(storage === "dark") {
    methodMode('add', true)
    sunIcon.forEach(x => {
        x.classList.remove('fa-sun')
        x.classList.add('fa-adjust')
    })
} else {
    methodMode('remove', false);
    sunIcon.forEach(x => {
        x.classList.add('fa-sun')
        x.classList.remove('fa-adjust')
    })
}

sunIcon.forEach(sun => {
    sun.addEventListener('click', () => {

        let checkDarkByName = container.className.split(" ").some(m => m === "containerDark");
        let checkLocal = checkDarkByName ? "light" : "dark";

        localStorage.setItem('theme', checkLocal)

        methodMode('toggle')
        for(let i = 0; i < sunIcon.length; i++) {
            sunIcon[i].classList.toggle('fa-sun');
            sunIcon[i].classList.toggle('fa-adjust');
        }
    })
})

function methodMode(method, opt = true) {
    let checkDarkByName = container.className.split(" ").some(m => m === "containerDark");

    body2.classList[method]("bodyDark")
    container.classList[method]("containerDark")
    aboutus.classList[method]("aboutusDark")
    card.forEach(c => c.classList[method]("cardDark"))
    cards.classList[method]("cardsDark");;
    commandP.classList[method]("commandPDark")
    print.classList[method]("printDark")
    footer.classList[method]("footerDark")
    h2About.forEach(x => x.classList[method]('h2AboutDark'))
    path.forEach(x => x.setAttribute("fill", checkDarkByName ? (opt ? "white" : "#121212") : (opt ? "#121212" : "white")));
}