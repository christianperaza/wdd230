const button = document.querySelector(".hamburgerButton");
const hamburger = document.querySelector(".hamburger");
const x = document.querySelector(".x");
const nav = document.querySelector(".nav");

button.addEventListener("click", ()=> {
    nav.classList.toggle("yes");
    hamburger.classList.toggle("no");
    x.classList.toggle("yes");
})