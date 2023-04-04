//An object with the API key and base URL
const api = {
  key: "254211217ada191d7ede899eb8b4ec41",
  base: "https://api.openweathermap.org/data/2.5/"
};
// Get the search box element and listen for keypress events
const searchbox = document.getElementById('search-box');
searchbox.addEventListener('keypress', setQuery);

// When the user types the Enter key in the search box, get the weather data for the entered city
function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}
// Fetch weather data for the specified city from the API and display it on the page
async function getResults (query) {
  const response = await  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`);
  const data = await response.json();
  displayResults(data);
 
}
getResults("sevenoaks");

// Update the HTML page with the weather data for the specified city
 function displayResults (weather) {
  let city = document.getElementById('city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  console.log(weather)
  let now = new Date(); 
  let date = document.getElementById('date');
  date.innerText = dateBuilder(now);


  let temp = document.getElementById('temp');
  temp.innerHTML = `${weather.main.temp}<span>°c</span>`;

  let weather_el = document.getElementById('weather');
  weather_el.innerText = weather.weather[0].main;

  let humidity = document.getElementById('humidity');
  humidity.innerText = `Humidity: ${weather.main.humidity}%`;

  let pressure = document.getElementById('pressure');
  pressure.innerText = `Pressure: ${weather.main.pressure} Pa`;
}
// Format the date as a string in a user-friendly format
function dateBuilder (d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
// Format the time as a string in a user-friendly format
function timeBuilder (d) {
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();

  return `${hours}:${minutes}:${seconds}`;
}
