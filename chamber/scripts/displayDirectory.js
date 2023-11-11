const baseURL = "https://iamfisherman.github.io/wdd230/";

const directoryURL = "https://iamfisherman.github.io/wdd230/chamber/data/members.json";

const div = document.querySelector(".directory-container");
const div2 = document.querySelector(".directory-list");

async function getCompanies() {
    const response = await fetch(directoryURL);
    const data = await response.json();
    // console.table(data.companies);

    displayCompaniesGrid(data.companies);
    displayCompaniesList(data.companies);
}

const displayCompaniesGrid = (members) => {
    members.forEach((member) => {
        let section = document.createElement("section");
        section.classList.toggle("section-directory");

        let img = document.createElement("img");
        img.setAttribute("src", member.imageLogo);
        img.setAttribute("alt", `${member.name}'s Logo`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "340");

        let direction = document.createElement("p");
        direction.innerHTML = `${member.address}`;

        let phone = document.createElement("p");
        phone.innerHTML = `${member.phoneNumber}`;

        let mail = document.createElement("p");
        mail.innerHTML = `${member.email}`;

        let website = document.createElement("a");
        website.setAttribute("target", "_blank");
        website.setAttribute("href", member.websiteURL);
        website.innerHTML = `${member.websiteURL}`;

        section.appendChild(img);
        section.appendChild(direction);
        section.appendChild(phone);
        section.appendChild(mail);
        section.appendChild(website);

        div.appendChild(section);
        
    })
}

const displayCompaniesList = (members) => {
    members.forEach((member) => {

        let section2 = document.createElement("section");
        section2.classList.toggle("section-directory-list");

        let divList = document.createElement("div");
        divList.classList.toggle("div-directory-list");



        let name = document.createElement("p");
        name.innerHTML = `${member.name}`;
        name.classList.toggle("name-directory-list");

        let direction = document.createElement("p");
        direction.innerHTML = `${member.address}`;

        let phone = document.createElement("p");
        phone.innerHTML = `${member.phoneNumber}`;

        let mail = document.createElement("p");
        mail.innerHTML = `${member.email}`;

        let website = document.createElement("a");
        website.setAttribute("target", "_blank");
        website.setAttribute("href", member.websiteURL);
        website.innerHTML = `${member.websiteURL}`;




        divList.appendChild(name);
        divList.appendChild(direction);
        divList.appendChild(phone);
        divList.appendChild(mail);
        divList.appendChild(website);

        section2.appendChild(divList);

        div2.appendChild(section2);

    })
}

getCompanies();

const gridContainer = document.querySelector(".directory-container");
const listContainer = document.querySelector(".directory-list");

const gridButton = document.querySelector(".grid-button");
const gridIcon = document.querySelector(".grid-button-icon");

const listButton = document.querySelector(".list-button");
const listIcon = document.querySelector(".list-button-icon");



listButton.addEventListener("click", ()=> {
    gridContainer.classList.add("no-show-grid");
    listContainer.classList.add("show-list");

    gridButton.classList.add("no-selected");
    gridIcon.classList.add("no-selected");

    listButton.classList.add("selected");
    listIcon.classList.add("selected");

})

gridButton.addEventListener("click", ()=> {
    gridContainer.classList.remove("no-show-grid");
    listContainer.classList.remove("show-list");

    gridButton.classList.remove("no-selected");
    gridIcon.classList.remove("no-selected");

    listButton.classList.remove("selected");
    listIcon.classList.remove("selected");

})