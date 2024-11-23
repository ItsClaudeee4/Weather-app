const apiKey = "e22b28e5ff4cb8132fb183a9d30c8ab0";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchCity = document.querySelector("input");
const cityBtn = document.querySelector("button");
const weatherImg = document.querySelector(".weatherImg img");

async function checkWeather(cityName) {
  const response = await fetch(apiURL + cityName + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  if (response.status === 404) {
    document.querySelector(".error p").style.display = "block";
    document.querySelector(".main").style.display = "none";
  } else {
    const city = document.querySelector(".weatherPlace");
    const degree = document.querySelector(".weatherDegree");
    const humidityPercentage = document.querySelector(".humidityPercentage");
    const speed = document.querySelector(".speed");

    city.innerHTML = data.name;
    degree.innerHTML = Math.round(data.main.temp) + "°C";
    humidityPercentage.innerHTML = data.main.humidity + "%";
    speed.innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main === "snow") {
      weatherImg.src = "/Weather App/images/snow.png";
    } else if (data.weather[0].main === "Rain") {
      weatherImg.src = "/Weather App/images/rain.png";
    } else if (data.weather[0].main === "Mist") {
      weatherImg.src = "/Weather App/images/mist.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherImg.src = "/Weather App/images/drizzle.png";
    } else if (data.weather[0].main === "Clouds") {
      weatherImg.src = "/Weather App/images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weatherImg.src = "/Weather App/images/clear.png";
    }
    console.log(weatherImg);

    document.querySelector(".error p").style.display = "none";
    document.querySelector(".main").style.display = "block";
  }
}

cityBtn.addEventListener("click", () => {
  checkWeather(searchCity.value);
});
