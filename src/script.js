function searchParis(event) {
  let unit = "metric";
  let apiKey = "8ee746d18f9f9f4609efcf4a58ee9252";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showCityTemperature);
}

let parisButton = document.querySelector("#paris");
parisButton.addEventListener("click", searchParis);

function searchAtlanta(event) {
  let unit = "metric";
  let apiKey = "8ee746d18f9f9f4609efcf4a58ee9252";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showCityTemperature);
}

let atlantaButton = document.querySelector("#atlanta");
atlantaButton.addEventListener("click", searchAtlanta);

function searchTokyo(event) {
  let unit = "metric";
  let apiKey = "8ee746d18f9f9f4609efcf4a58ee9252";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showCityTemperature);
}

let tokyoButton = document.querySelector("#tokyo");
tokyoButton.addEventListener("click", searchTokyo);

function handleClick(event) {
  let searchInput = document.querySelector("#search-text-input").value;
  let unit = "metric";
  let apiKey = "8ee746d18f9f9f4609efcf4a58ee9252";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showCityTemperature);
}
let searchButton = document.querySelector("#search-city-button");
searchButton.addEventListener("click", handleClick);

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input").value;
  let unit = "metric";
  let apiKey = "8ee746d18f9f9f4609efcf4a58ee9252";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showCityTemperature);
}
let cityForm = document.querySelector("#search-city");
cityForm.addEventListener("submit", searchCity);

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
function formatTime(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  return days[day];
}

function displayForecast(response) {
  let forecast = response.data.daily;

  let forecastElement = document.querySelector(
    "#weather-forecast-temperatures"
  );

  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 5) {
      forecastHTML =
        forecastHTML +
        `
              <div class="col-sm-2">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">${formatDay(forecastDay.dt)}</h5>
  
                    <img
                      src="http://openweathermap.org/img/wn/${
                        forecastDay.weather[0].icon
                      }@2x.png"
                      width="60"
                    />
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">High ${Math.round(
                      forecastDay.temp.max
                    )}°</li>
                    <li class="list-group-item">Low ${Math.round(
                      forecastDay.temp.min
                    )}°</li>
                    <li class="list-group-item">${
                      forecastDay.weather[0].description
                    }</li>
                  </ul>
                </div>
              </div>
              `;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "8ee746d18f9f9f4609efcf4a58ee9252";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude={part}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}
function showCityTemperature(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#current-temperature-unit");
  let city = document.querySelector("#cityName");
  let conditionElement = document.querySelector("#condition-description");
  let sunriseElement = document.querySelector("#sunrise");
  let sunsetElement = document.querySelector("#sunset");
  let dateElement = document.querySelector("#dateTime");
  let iconElement = document.querySelector("#icon");
  let windElement = document.querySelector("#wind");
  celciusTemperature = response.data.main.temp;
  temperatureElement.innerHTML = temperature;
  city.innerHTML = response.data.name;
  conditionElement.innerHTML = response.data.weather[0].description;
  sunriseElement.innerHTML = formatTime(response.data.sys.sunrise * 1000);
  sunsetElement.innerHTML = formatTime(response.data.sys.sunset * 1000);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
  windElement.innerHTML = response.data.wind.speed;

  getForecast(response.data.coord);
}

let apiKey = "8ee746d18f9f9f4609efcf4a58ee9252";
let unit = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Zurich&appid=${apiKey}&units=${unit}`;
axios.get(apiUrl).then(showCityTemperature);

function getLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let unit = "metric";
  let apiKey = "8ee746d18f9f9f4609efcf4a58ee9252";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showCityTemperature);
}
function getCurrentLocation(event) {
  event.preventDefault;
  navigator.geolocation.getCurrentPosition(getLocation);
}
let currentButton = document.querySelector("#current-location");
currentButton.addEventListener("click", getCurrentLocation);
