import React from "react";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  return (
    <div className="ForecastDay">
      <li className="row WeatherForecast-info">
        <div className="col-6 WeatherForecast-day">{day()}</div>
        <div className="col-2 WeatherForecast-icon">
          <img
            src={
              require(`./weather_icons/${props.data.weather[0].icon}.png`)
                .default
            }
            alt="forecast icon"
            className="forecast-icons"
          />
        </div>
        <div className="col-2 WeatherForecast-temp-max">{maxTemp()}°</div>
        <div className="col-2 WeatherForecast-temp-min">{minTemp()}°</div>
      </li>
    </div>
  );
}
