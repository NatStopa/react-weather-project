import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <ul>
        <li className="row WeatherForecast-info">
          <div className="col-6 WeatherForecast-day">Monday</div>
          <div className="col-2 WeatherForecast-icon">
            <img
              src={require(`./weather_icons/10d.png`).default}
              alt="forecast icon"
              className="forecast-icons"
            />
          </div>
          <div className="col-2 WeatherForecast-temp-max">30°</div>
          <div className="col-2 WeatherForecast-temp-min">25°</div>
        </li>
      </ul>
    </div>
  );
}
