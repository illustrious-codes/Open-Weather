"use strict";
const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error = document.querySelector(".not-found");

search.addEventListener("click", () => {
  const APIkey = "2010251720eb765c7d83c69a8a6f408f";
  const city = document.querySelector(".search-box input").value;
  if (city == "") return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cod == "404") {
        container.style.height = "500px";
        weatherBox.classList.remove("active");
        weatherDetails.classList.remove("active");
        error.classList.add("active");
        return;
      }

      container.style.height = "555px";
      weatherBox.classList.add("active");
      weatherDetails.classList.add("active");
      error.classList.remove("active");

      const image = document.querySelector(".weather-box img");
      const temperature = document.getElementById("temperature");
      const description = document.getElementById("description");
      const humidity = document.getElementById("humidity");
      const wind = document.getElementById("wind");

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "./images/clear.png";
          break;
        case "Rain":
          image.src = "./images/rain.png";
          break;
        case "Snow":
          image.src = "./images/snow.png";
          break;
        case "Clouds":
          image.src = "./images/cloud.png";
          break;
        case "Mist":
          image.src = "./images/mist.png";
          break;
        case "Haze":
          image.src = "./images/mist.png";
          break;
        default:
          image.src = "./images/cloud.png";
      }
      temperature.innerHTML = `${parseInt(json.main.temp)} <span>0C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
    });
});
