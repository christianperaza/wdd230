const menuButton = document.querySelector("#menuButton");
const downIcon = document.querySelector("#downIcon");
const upIcon = document.querySelector("#upIcon");

const mobileNav = document.querySelector("#mobileNav");

menuButton.addEventListener("click", ()=> {
    downIcon.classList.toggle("noShow");
    upIcon.classList.toggle("show");
    mobileNav.classList.toggle("show");
})