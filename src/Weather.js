import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      date: new Date(response.data.dt * 1000),
      ready: true,
      city: response.data.name,
      temp: response.data.main.temp,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
    });
  }

  function search() {
    const apiKey = "02ae2bfab4b783181c5ec4a0935ec345";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control city-input"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn search-button"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <hr />
        <WeatherForecast />
      </div>
    );
  } else {
    search();
    return (
      <div className="loader">
        <Loader
          type="Puff"
          color="#2d2741"
          height={80}
          width={80}
          timeout={3000}
        />
      </div>
    );
  }
}
