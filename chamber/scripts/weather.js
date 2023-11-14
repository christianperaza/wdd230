// WEATHER...

// create const for each HTML value we need
const weatherIcon = document.querySelector("#wea-sun");
const temp = document.querySelector("#temperature");
const description = document.querySelector("#description");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-speed");

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

    // humidity...
    humidity.innerHTML = `${data.main.humidity} %`;

    // wind chill...
    const windChill = 35.74 + (0.6215 * data.main.temp) - (35.75 * data.wind.speed + 0.16) +  (0.4275 * data.main.temp * data.wind.speed + 0.16);
    windSpeed.innerHTML = windChill.toFixed(2);
}


// FORECAST...

// forecast HTML elements
// 1° day
const imgFore = document.querySelector("#imgFore");
const tempFore = document.querySelector("#tempFore");
const dateFore = document.querySelector("#dateFore");
const dayFore = document.querySelector("#dayFore");
// 2° day
const imgFore2 = document.querySelector("#imgFore2");
const tempFore2 = document.querySelector("#tempFore2");
const dateFore2 = document.querySelector("#dateFore2");
const dayFore2 = document.querySelector("#dayFore2");
// 3° day
const imgFore3 = document.querySelector("#imgFore3");
const tempFore3 = document.querySelector("#tempFore3");
const dateFore3 = document.querySelector("#dateFore3");
const dayFore3 = document.querySelector("#dayFore3");

// cnt parameter
const cnt = 32;

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=${lat}&lon=${lon}&appid=${apiKey}&cnt=${cnt}`;

async function getForecastFetch() {
    try {
        const forecastResponse = await fetch(forecastURL);
        if (forecastResponse.ok) {
            const foreData = await forecastResponse.json();
            console.log(foreData); // testing
            displayForecast(foreData);
        } else {
            throw Error(await forecastResponse.text());
        }
    } catch (error) {
        console.log(error);
    } 
}

function displayForecast(data) {
    // forecast description...
    // 1° day
    const forecastDesc = `${data.list[8].weather[0].description}`;
    // 2° day
    const forecastDesc2 = `${data.list[16].weather[0].description}`;
    // 3° day
    const forecastDesc3 = `${data.list[24].weather[0].description}`;

    // forecast icon...
    // 1° day
    const forecastIcon = `${data.list[8].weather[0].icon}`;
    const forecastIconsrc = `https://openweathermap.org/img/wn/${forecastIcon}@2x.png`;
    imgFore.setAttribute("src", forecastIconsrc);
    imgFore.setAttribute("alt", `${forecastDesc} Icon`);
    // 2° day
    const forecastIcon2 = `${data.list[16].weather[0].icon}`;
    const forecastIconsrc2 = `https://openweathermap.org/img/wn/${forecastIcon2}@2x.png`;
    imgFore2.setAttribute("src", forecastIconsrc2);
    imgFore2.setAttribute("alt", `${forecastDesc2} Icon`);
    // 3° day
    const forecastIcon3 = `${data.list[24].weather[0].icon}`;
    const forecastIconsrc3 = `https://openweathermap.org/img/wn/${forecastIcon3}@2x.png`;
    imgFore3.setAttribute("src", forecastIconsrc3);
    imgFore3.setAttribute("alt", `${forecastDesc3} Icon`);

    // forecast temperature...
    // 1° day
    const forecastTemp = `${Math.trunc(data.list[8].main.temp)} &deg;F`;
    tempFore.innerHTML = forecastTemp;
    // 2° day
    const forecastTemp2 = `${Math.trunc(data.list[16].main.temp)} &deg;F`;
    tempFore2.innerHTML = forecastTemp2;
    // 3° day
    const forecastTemp3 = `${Math.trunc(data.list[24].main.temp)} &deg;F`;
    tempFore3.innerHTML = forecastTemp3;

    // forecast date...
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // 1° day
    const dateForecast = `${data.list[8].dt}`;
    const d = new Date(dateForecast * 1000);
    // const date = d.toUTCString();
    dateFore.innerHTML = `${months[d.getMonth()]} ${d.getDate()}`;
    dayFore.innerHTML = `${days[d.getDay()]}`;
    // 2° day
    const dateForecast2 = `${data.list[16].dt}`;
    const d2 = new Date(dateForecast2 * 1000);
    // const date2 = d2.toUTCString();
    dateFore2.innerHTML = `${months[d2.getMonth()]} ${d2.getDate()}`;
    dayFore2.innerHTML = `${days[d2.getDay()]}`;
    // 3° day
    const dateForecast3 = `${data.list[24].dt}`;
    const d3 = new Date(dateForecast3 * 1000);
    //const date3 = d3.toUTCString();
    dateFore3.innerHTML = `${months[d3.getMonth()]} ${d3.getDate()}`;
    dayFore3.innerHTML = `${days[d3.getDay()]}`;

}

getApiFetch();
getForecastFetch();




// const apiKey = "7681555cd3915261b221e827c974ec01";

// const fetchData = position => {
//     const {latitude, longitude} = position. coords;

//     fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
//     .then(response => response.json())
//     .then(data => setWeatherData(data))
// }

// const setWeatherData = data => {
//     console.log(data);
//     const weatherData = {
//         temperature: data.main.temp.toFixed(2),
//         description: data.weather[0].description,
//         humidity: data.main.humidity,
//         windspeed: data.wind.speed,
//         icon: data.weather[0].icon,
//     }

//     var img;
//     img = document.createElement('img');

//     Object.keys(weatherData).forEach(key => {
//         document.getElementById(key).textContent = weatherData[key];

//         const windChill = 35.74 + (0.6215 * weatherData.temperature) - (35.75 * weatherData.windspeed + 0.16) +  (0.4275 * weatherData.temperature * weatherData.windspeed + 0.16);
//         document.getElementById("wind-speed").innerHTML = windChill.toFixed(2);

//         const icon = weatherData.icon;
//         img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
//         document.getElementById('wea-sun').appendChild(img);
        
        
//     });

    
    




// }

// const onLoad = () => {
//     navigator.geolocation.getCurrentPosition(fetchData);
// }