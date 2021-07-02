import React from "react";
import "./Weather.css";

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
      <div className="current-weather">
        <h1 className="current-city">Krakow</h1>
        <p className="current-temp">20°</p>
        <ul className="current-weather-props">
          <li className="current-description row">
            <div className="col-1">☀️</div>
            <div className="col-11">Clear sky</div>
          </li>
          <li className="humidity row">
            <div className="col-1">☔︎</div>
            <div className="col-11">60%</div>
          </li>
          <li className="wind row">
            <div className="col-1">☴</div>
            <div className="col-11">3km/h</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
