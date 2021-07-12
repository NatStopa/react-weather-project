import React from "react";
import "./Weather.css";
import humidityicon from "./humidity.png";
import weathericon from "./sun.png";
import windicon from "./windsock.png";

export default function Weather() {
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
            <input type="submit" value="Search" className="btn search-button" />
          </div>
        </div>
      </form>
      <p className="current-date">Saturday 15:00</p>
      <hr />
      <div className="current-weather">
        <h1 className="current-city">Los Angeles</h1>
        <p className="current-temp">20°</p>
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
            <div className="col-9">Clear sky</div>
          </li>
          <li className="humidity row">
            <div className="col-3">
              <img
                src={humidityicon}
                alt="humidity icon"
                className="description-icons"
              />
            </div>
            <div className="col-9">60%</div>
          </li>
          <li className="wind row">
            <div className="col-3">
              <img
                src={windicon}
                alt="wind icon"
                className="description-icons"
              />
            </div>
            <div className="col-9">3km/h</div>
          </li>
        </ul>
        <ul className="current-weather-props col-5">
          <li className="row">
            <strong className="col-4">Max</strong>
            <div className="col-8">25°</div>
          </li>
          <li className="row">
            <strong className="col-4">Min</strong>
            <div className="col-8">19°</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
