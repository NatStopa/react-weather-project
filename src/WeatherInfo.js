import React from "react";
import FormatDate from "./FormatDate";
import humidityicon from "./humidity.png";
import windicon from "./wind.png";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <p className="current-date">
        <FormatDate date={props.data.date} />
      </p>
      <hr />
      <div className="current-weather">
        <h1 className="current-city">{props.data.city}</h1>
        <p className="current-temp">{Math.round(props.data.temp)}°</p>
      </div>
      <hr />
      <div className="row">
        <ul className="current-weather-props col-7">
          <li className="current-description row">
            <div className="col-3 icons">
              <img
                src={require(`./weather_icons/${props.data.icon}.png`).default}
                alt="weather icon"
                className="description-icons"
              />
            </div>
            <div className="col-9 text-capitalize">
              {props.data.description}
            </div>
          </li>
          <li className="humidity row">
            <div className="col-3 icons">
              <img
                src={humidityicon}
                alt="humidity icon"
                className="description-icons"
              />
            </div>
            <div className="col-9">{props.data.humidity}%</div>
          </li>
          <li className="wind row">
            <div className="col-3 icons">
              <img
                src={windicon}
                alt="wind icon"
                className="description-icons"
              />
            </div>
            <div className="col-9">{Math.round(props.data.wind)}km/h</div>
          </li>
        </ul>
        <ul className="current-weather-props col-4">
          <li className="row">
            <strong className="col-4">Max</strong>
            <div className="col-8">{Math.round(props.data.max)}°</div>
          </li>
          <li className="row">
            <strong className="col-4">Min</strong>
            <div className="col-8">{Math.round(props.data.min)}°</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
