const latitude = require("latitude");
const fetch = require("node-fetch");
//npm install latitude
const API_KEY = "dd4921796c965b0ccbba3efc67e8b7f7";

latitude().then(location => {
  const latitude = location.latitude;
  const longitude = location.longitude;
  getWeather(latitude, longitude);
}); //show location info

const getWeather = (lat, lng) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  ) //call API and Get weather info
    .then(res => res.json())
    .then(json => {
      const weather = {
        country: json.sys.country,
        temp: json.main.temp,
        state: json.weather[0].main,
        description: json.weather[0].description
      };
      console.log(weather);
      return weather;
    });
};
