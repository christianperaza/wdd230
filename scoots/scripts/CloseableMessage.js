const closeableMessageSection = document.querySelector("#closeableMessageSection");
const closeableMessageButton = document.querySelector("#closeableMessageButton");

closeableMessageButton.addEventListener("click", ()=> {
    closeableMessageSection.classList.add("noShow");
})