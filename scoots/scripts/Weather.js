// ------------- CURRENT WEATHER ------------- //

// create const for each HTML value we need
const tempMax = document.querySelector("#tempMax");
const weatherDiv = document.querySelector("#weatherDiv");

const currentIconDesc = document.querySelector("#currentIconDesc");
const currentIconElement = document.createElement("img");
const currentDescDiv = document.querySelector("#currentDescDiv");
const currentDescription = document.querySelector("#currentDescription");
const currentDate = document.querySelector("#currentDate");

const currentTemp = document.querySelector("#currentTemp");
const currentHumidity = document.querySelector("#currentHumidity");

// store latitude, longitude, and apiKey
const lat = 20.508714;
const lon = -86.946762;
const apiKey = "7681555cd3915261b221e827c974ec01";

const url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&appid=${apiKey}`;

async function getApiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    } 
}

function displayResults(data) {
    // add temp max...
    tempMax.innerHTML = `${Math.trunc(data.main.temp_max)} &deg;F`;

    // description...
    const description = data.weather[0].description;
    const descSplited = description.split(" ");

    for (let index = 0; index < descSplited.length; index++) {
        descSplited[index] = descSplited[index].charAt(0).toUpperCase() + descSplited[index].slice(1); 
    }

    const descCapitalized = descSplited.join(" ");
    currentDescription.innerHTML = `${descCapitalized}`;

    // icon...
    const icon = `${data.weather[0].icon}`;
    const iconSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    
    currentIconElement.setAttribute("src", iconSrc);
    currentIconElement.setAttribute("alt", `${descCapitalized} Icon`);
    currentIconElement.setAttribute("loading", "lazy");
    currentIconElement.classList.add("currentIcon");

    currentIconDesc.insertBefore(currentIconElement, currentDescDiv);


    // date...
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const date = `${data.dt}`;
    const d = new Date(date * 1000);

    currentDate.innerHTML = `${days[d.getDay()]} ${d.getDate()}, ${d.getFullYear()}`;

    // temp...
    const temp = `${data.main.temp}`;
    currentTemp.innerHTML = `${Math.trunc(temp)} &deg;F`;

    // humidity...
    const humidity = `${data.main.humidity}`;
    currentHumidity.innerHTML = `Humidity ${humidity}%`;

}

// ------------- FORECAST WEATHER ------------- //

const forecastDiv = document.querySelector("#forecastDiv");
const forecastTitle = document.createElement("div");
const forecastTemp = document.querySelector("#forecastTemp");
const forecastDescription = document.querySelector("#forecastDescription");

const forecastMainDiv = document.querySelector("#forecastMainDiv");
const forecastInfoDiv = document.querySelector("#forecastInfoDiv");
const forecastIcon = document.createElement("img");

// cnt parameter
const cnt = 8;

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=${lat}&lon=${lon}&appid=${apiKey}&cnt=${cnt}`;

async function getForecastFetch() {
    try {
        const forecastResponse = await fetch(forecastURL);
        if (forecastResponse.ok) {
            const foreData = await forecastResponse.json();
            console.log(foreData.list); // testing
            displayForecast(foreData.list);
        } else {
            throw Error(await forecastResponse.text());
        }
    } catch (error) {
        console.log(error);
    } 
}

function displayForecast(datas) {

    for (let index = 0; index < datas.length; index++) {

        const fDate = datas[index].dt;
        const fD = new Date(fDate * 1000);
        const fTime = fD.getHours();

        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        if (fTime == 15)
        {
            // date and time
            forecastTitle.innerHTML = `Tomorrow at ${fTime}:00 h`;
            forecastTitle.classList.add("forecastTitle");

            forecastDiv.insertBefore(forecastTitle, forecastMainDiv);
            

            // temp
            forecastTemp.innerHTML = `${Math.trunc(datas[index].main.temp)} &deg;F`;

            // description
            const description = datas[index].weather[0].description;
            const descSplited = description.split(" ");

            for (let index = 0; index < descSplited.length; index++) {
                descSplited[index] = descSplited[index].charAt(0).toUpperCase() + descSplited[index].slice(1); 
            }

            const descCapitalized = descSplited.join(" ");
            forecastDescription.innerHTML = `${descCapitalized}`;

            // icon
            const icon = `${datas[index].weather[0].icon}`;
            const iconSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    
            forecastIcon.setAttribute("src", iconSrc);
            forecastIcon.setAttribute("alt", `${descCapitalized} Icon`);
            forecastIcon.setAttribute("loading", "lazy");
            forecastIcon.classList.add("forecastIcon");

            forecastInfoDiv.insertBefore(forecastIcon, forecastTemp);
        }
    }

}

getApiFetch();
getForecastFetch();