// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

// store the lat, lon, and API key in a variable
const lat = 49.75;
const lon = 6.64;
const apiKey = "7681555cd3915261b221e827c974ec01";

// declare const variable with the URL from openweathermap API documentation
const url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this line was just to testing
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    } 
}

function displayResults(data) {
    // temp...
    currentTemp.innerHTML = `${Math.trunc(data.main.temp)} &deg;F`;

    // icon...
    const icon = `${data.weather[0].icon}`;
    const iconsrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", "Weather Icon");

    // description...
    const desc = data.weather[0].description;
    const descSplited = desc.split(" ");

    for (let index = 0; index < descSplited.length; index++) {
        descSplited[index] = descSplited[index].charAt(0).toUpperCase() + descSplited[index].slice(1); 
    }

    const descCapitalized = descSplited.join(" ");
    captionDesc.innerHTML = `${descCapitalized}`;
}

apiFetch();