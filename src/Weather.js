import "./Weather.css";
import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [city, newCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [temprature, setTemprature] = useState(null);
  let [wind, setWind] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [description, setDescription] = useState(null);
  let [icon, setIcon] = useState(null);

  function updateCity(event) {
    event.preventDefault();
    newCity(event.target.value);
  }

  function showTemp(response) {
    setLoaded(true);
    setTemprature(Math.round(response.data.main.temp));
    setWind(Math.round(response.data.wind.speed));
    setHumidity(Math.round(response.data.main.humidity));
    setDescription(response.data.weather[0].description);
    setIcon(response.data.weather[0].icon);
  }

  function showWeather(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f3887e262c88d1158f7e2ef4998e234c&units=metric`;
    axios.get(url).then(showTemp);
  }
  let form = (
    <form onSubmit={showWeather}>
      <input type="search" placeholder="Search a City" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul className="NeatList">
          <li>
            <strong>{city}</strong>
          </li>
          <li>Temprature: {temprature} ℃</li>
          <li>Wind: {wind} km/h</li>
          <li>Humidity: {humidity} %</li>
          <li>Description: {description}</li>
          <li>
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="WeatherImage"
            />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
