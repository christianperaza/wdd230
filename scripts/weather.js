const apiKey = "7681555cd3915261b221e827c974ec01";

const fetchData = position => {
    const {latitude, longitude} = position. coords;

    fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => setWeatherData(data))
}

const setWeatherData = data => {
    console.log(data);
    const weatherData = {
        country: data.name,
        temperature: data.main.temp.toFixed(2),
        description: data.weather[0].description,
        icon: data.weather[0].icon,
    }

    var img;
    img = document.createElement('img');

    Object.keys(weatherData).forEach(key => {
        document.getElementById(key).textContent = weatherData[key];

        const icon = weatherData.icon;
        img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        document.getElementById('wea-sun').appendChild(img);
        
    });

    
    




}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}