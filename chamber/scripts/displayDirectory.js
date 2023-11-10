const baseURL = "https://iamfisherman.github.io/wdd230/";

const directoryURL = "https://iamfisherman.github.io/wdd230/chamber/data/members.json";

async function getCompanies() {
    const response = await fetch(directoryURL);
    const data = await response.json();
    console.table(data.companies);
}

getCompanies();