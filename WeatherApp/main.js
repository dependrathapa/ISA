const api = {
  key: "254211217ada191d7ede899eb8b4ec41",
  base: "https://api.openweathermap.org/data/2.5/"
};

const searchbox = document.getElementById('search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

async function getResults (query) {
  const response = await  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`);
  const data = await response.json();
  displayResults(data);
 
}
getResults("sevenoaks");

 function displayResults (weather) {
  let city = document.getElementById('city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  console.log(weather)
  let now = new Date(); 
  let date = document.getElementById('date');
  date.innerText = dateBuilder(now);

  // let time = document.getElementById('time');
  // time.innerText =  timeBuilder(now);

  let temp = document.getElementById('temp');
  temp.innerHTML = `${weather.main.temp}<span>°c</span>`;

  let weather_el = document.getElementById('weather');
  weather_el.innerText = weather.weather[0].main;

  let humidity = document.getElementById('humidity');
  humidity.innerText = `Humidity: ${weather.main.humidity}%`;

  let pressure = document.getElementById('pressure');
  pressure.innerText = `Pressure: ${weather.main.pressure} Pa`;
}

function dateBuilder (d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

function timeBuilder (d) {
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();

  return `${hours}:${minutes}:${seconds}`;
}
