import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }

  let apiKey = "02ae2bfab4b783181c5ec4a0935ec345";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

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
