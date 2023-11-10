const baseURL = "https://iamfisherman.github.io/wdd230/";

const directoryURL = "https://iamfisherman.github.io/wdd230/chamber/data/members.json";

const div = document.querySelector(".directory-container");

async function getCompanies() {
    const response = await fetch(directoryURL);
    const data = await response.json();
    // console.table(data.companies);

    displayCompanies(data.companies);
}

getCompanies();

const displayCompanies = (members) => {
    members.forEach((member) => {
        let section = document.createElement("section");

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