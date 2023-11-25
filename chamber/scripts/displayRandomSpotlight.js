const baseURL = "https://iamfisherman.github.io/wdd230/";

const directoryURL = "https://iamfisherman.github.io/wdd230/chamber/data/members.json";

const spotDiv = document.querySelector(".spot-div");

async function getCompanies() {
    const response = await fetch(directoryURL);
    const data = await response.json();
    console.table(data.companies);

    displayRandomSpotlights(data.companies);
}

function selectRandomMember(member) {
    return member[Math.floor(Math.random() * member.length)]
}

const displayRandomSpotlights = (members) => {
    let counter = 0;
    
    members.forEach((member) => {
        let randomMember = selectRandomMember(members);

        if (randomMember.membershipLevel == "Gold" || randomMember.membershipLevel == "Silver") 
        {
            if (counter < 3) {
                let section = document.createElement("section");
                section.classList.add("section-directory");

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

                spotDiv.appendChild(section);

                counter++;
            }
            
            

        }
    });
}

getCompanies();