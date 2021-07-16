import React, { useState } from "react";
import FormatDate from "./FormatDate";
import axios from "axios";
import "./Weather.css";
import humidityicon from "./humidity.png";
import weathericon from "./sun.png";
import windicon from "./windsock.png";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      date: new Date(response.data.dt * 1000),
      ready: true,
      city: response.data.name,
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control city-input"
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
        <p className="current-date">
          <FormatDate date={weatherData.date} />
        </p>
        <hr />
        <div className="current-weather">
          <h1 className="current-city">{weatherData.city}</h1>
          <p className="current-temp">{Math.round(weatherData.temp)}°C</p>
        </div>
        <hr />
        <div className="row">
          <ul className="current-weather-props col-6">
            <li className="current-description row">
              <div className="col-3">
                <img
                  src={weathericon}
                  alt="weather icon"
                  className="description-icons"
                />
              </div>
              <div className="col-9 text-capitalize">
                {weatherData.description}
              </div>
            </li>
            <li className="humidity row">
              <div className="col-3">
                <img
                  src={humidityicon}
                  alt="humidity icon"
                  className="description-icons"
                />
              </div>
              <div className="col-9">{weatherData.humidity}%</div>
            </li>
            <li className="wind row">
              <div className="col-3">
                <img
                  src={windicon}
                  alt="wind icon"
                  className="description-icons"
                />
              </div>
              <div className="col-9">{Math.round(weatherData.wind)}km/h</div>
            </li>
          </ul>
          <ul className="current-weather-props col-5">
            <li className="row">
              <strong className="col-4">Max</strong>
              <div className="col-8">{Math.round(weatherData.max)}°</div>
            </li>
            <li className="row">
              <strong className="col-4">Min</strong>
              <div className="col-8">{Math.round(weatherData.min)}°</div>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    const apiKey = "02ae2bfab4b783181c5ec4a0935ec345";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <div className="loader">
        <Loader
          type="Grid"
          color="#2d2741"
          height={250}
          width={250}
          timeout={3000}
        />
      </div>
    );
  }
}
