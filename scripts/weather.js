// create const for each HTML value we need
const cityName = document. querySelector("#city-name");
const weatherIcon = document.querySelector("#wea-sun");
const temp = document.querySelector("#temperature");
const description = document.querySelector("#description");

// store latitude, longitude, and apiKey
const lat = 8.366384270946151; 
const lon = -62.649743355287214;
const apiKey = "7681555cd3915261b221e827c974ec01";

const url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&appid=${apiKey}`;

async function getApiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    } 
}

function displayResults(data) {
    // name...
    cityName.innerHTML = `${data.name}`;

    // temp...
    temp.innerHTML = `${Math.trunc(data.main.temp)} &deg;F`;

    // description...
    const desc = data.weather[0].description;
    const descSplited = desc.split(" ");

    for (let index = 0; index < descSplited.length; index++) {
        descSplited[index] = descSplited[index].charAt(0).toUpperCase() + descSplited[index].slice(1); 
    }

    const descCapitalized = descSplited.join(" ");
    description.innerHTML = `${descCapitalized}`;

    // icon...
    const icon = `${data.weather[0].icon}`;
    const iconsrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", `${descCapitalized} Icon`);
}

getApiFetch();