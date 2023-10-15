const buttonDark = document.querySelector("#button-dark");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

const logoNav = document.querySelector(".logoNav");
const logoNavDark = document.querySelector(".logoNav-dark");

const body = document.querySelector("body");
const header = document.querySelector(".header");
const hamburgerDark = document.querySelector(".hamburgerButton");

const socialHeader = document.querySelector("#social-header-div");

const navLarge = document.querySelector("#navList-large");

const main = document.querySelector("#main");

buttonDark.addEventListener("click", ()=> {
    moon.classList.toggle("no");
    sun.classList.toggle("yes");

    logoNav.classList.toggle("no");
    logoNavDark.classList.toggle("yes");

    body.classList.toggle("dark");
    header.classList.toggle("dark");
    hamburgerDark.classList.toggle("dark");

    buttonDark.classList.toggle("dark");

    socialHeader.classList.toggle("dark");

    navLarge.classList.toggle("dark");

    main.classList.toggle("dark");
})