const button = document.querySelector(".button");
const nav = document.querySelector(".nav");
const ham = document.querySelector(".hamburger");
const x = document.querySelector(".x");

button.addEventListener("click", ()=> {
    nav.classList.toggle("active");
    ham.classList.toggle("dont");
    x.classList.toggle("yes");
})