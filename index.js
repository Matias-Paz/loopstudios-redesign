// Variables
const checkbox = document.querySelector('#menu');
const nav = document.querySelector("nav");
const ctaHero = document.querySelector(".hero__title");

// Seleccionar los elementos necesarios
document.addEventListener("DOMContentLoaded", function(){
    initApp();
});

// Funciones
function initApp() {
    handleScrollNav();
    handleNavClass();
};

function handleNavClass() {
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            nav.classList.add("nav--color");
        } else if (ctaHero.getBoundingClientRect().top > 100) {
            nav.classList.remove("nav--color");
        }
    });
};

function handleScrollNav() {
    window.addEventListener('scroll', function() {
        if (ctaHero.getBoundingClientRect().top < 100 || checkbox.checked) {
            nav.classList.add("nav--color");
        } else if (ctaHero.getBoundingClientRect().top > 100){
            nav.classList.remove("nav--color");
        }
    });
};