"use strict";
const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");

search.addEventListener("click", () => {
  const APIkey = "2010251720eb765c7d83c69a8a6f408f";
  const city = document.querySelector(".search-box input").value;
  if (city == "") return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`
  )
    .then((reponse) => response.json())
    .then((json) => {
      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector("weather-box .temperature");
      const description = document.querySelector("weather-box .description");
      const humidity = document.querySelector("weather-box .humidity span");
      const wind = document.querySelector("weather-box .wind span");

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "./images/sun_weather-removebg-preview.png";
          break;
        case "Clear":
          image.src = "./images/sun_weather-removebg-preview.png";
          break;
        case "Clear":
          image.src = "./images/sun_weather-removebg-preview.png";
          break;
        case "Clear":
          image.src = "./images/sun_weather-removebg-preview.png";
          break;
        case "Clear":
          image.src = "./images/sun_weather-removebg-preview.png";
          break;
      }

      temperature.innerHTML = `${parseInt(json.main.temp)} <span></span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
    });
});
