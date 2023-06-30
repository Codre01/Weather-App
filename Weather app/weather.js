const apiKey = "3b866f050353fbd206720e5d39fe165b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cityName = document.querySelector("input");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = `<h1 class="temp">${Math.round(data.main.temp)}<sup>o</sup>C</h1>`;
        document.querySelector(".humidity").innerHTML = `<p class="humidity">${data.main.humidity}%</p>`;
        document.querySelector(".wind").innerHTML = `<p class="wind">${data.wind.speed} km/h </p>`;

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png"
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
        }

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }



}


document.querySelector("#weatherButton").addEventListener("click", () => {
    checkWeather(cityName.value)
});