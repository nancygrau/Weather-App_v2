//Feature 2

function handleClick(event) {
  let searchInput = document.querySelector("#search-text-input").value;
  let unit = "metric";
  let apiKey = "8ee746d18f9f9f4609efcf4a58ee9252";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showCityTemperature);
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchInput.value;
}
let searchButton = document.querySelector("#search-city-button");
searchButton.addEventListener("click", handleClick);

//Feature 1
let h2 = document.querySelector("h2");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

h2.innerHTML = `${day} ${hour}:${minutes}`;
//Week 5
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

function showCityTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#current-temperature-unit");
  temperatureElement.innerHTML = temperature;
  let city = document.querySelector("h1");
  city.innerHTML = response.data.name;
}
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
