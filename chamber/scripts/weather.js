const apiKey = "7681555cd3915261b221e827c974ec01";

const fetchData = position => {
    const {latitude, longitude} = position. coords;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => setWeatherData(data))
}

const setWeatherData = data => {
    console.log(data);
    const weatherData = {
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
    }

    Object.keys(weatherData).forEach(key => {
        document.getElementById(key).innerHTML = weatherData[key];
    });

    document.getElementById("wind-speed").innerHTML = 35.74 + (0.6215 * weatherData.temperature) - (35.75 * weatherData.windspeed + 0.16) +  (0.4275 * weatherData.temperature * weatherData.windspeed + 0.16); 




}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}