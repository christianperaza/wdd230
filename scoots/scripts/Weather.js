// ------------- CURRENT WEATHER ------------- //

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