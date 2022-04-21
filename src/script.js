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

//Bonus
function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temperature-unit");
  temperatureElement.innerHTML = 55;
}
function convertToCelcius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temperature-unit");
  temperatureElement.innerHTML = 13;
}
let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", convertToFahrenheit);
let celciusLink = document.querySelector("#celsius");
celciusLink.addEventListener("click", convertToCelcius);
