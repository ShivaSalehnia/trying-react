import React from "react";
import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <p>
        This project is{" "}
        <a href="https://github.com/ShivaSalehnia/trying-react">open source</a>,
        by <a href="https://github.com/ShivaSalehnia">Shiva Salehnia</a>
      </p>
    </div>
  );
}
