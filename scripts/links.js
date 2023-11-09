const baseURL = "https://iamfisherman.github.io/wdd230/";

const linksURL = "https://iamfisherman.github.io/wdd230/data/links.json";

async function GetLinks()
{
    const response = await fetch(linksURL);
    const data = await response.json();
    console.table(data.lessons);
}

GetLinks();