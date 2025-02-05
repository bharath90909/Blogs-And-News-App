import React, { Suspense, useContext, useEffect, useState } from "react";
import "../ui/css/Weather.css";
import axios from "axios";
import { NewsContext } from "../context/NewsProvider";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
function Weather() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("Hyderabad");
  const [error, setError] = useState(false);
  const fetchWeather = async () => {
    setError(false);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (err) {
      setError(true);
    }
    setLocation("");
  };

  useEffect(() => {
    fetchWeather();
    return () => {};
  }, []);

  return (
    <div className="weather">
      <div className="search">
        <div className="search-top">
          <i className="fa-solid fa-location-dot"></i>
          <div className="location">{data.name}</div>
        </div>
        <div className="search-location">
          <input
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={fetchWeather}
          ></i>
        </div>
      </div>
      {!error ? (
        <div className="weather-data">
          <div className="weather-type">
            {data?.weather ? data.weather[0].main : null}
          </div>
          <i className="bx bxs-sun"></i>
          <div className="temp">
            {data && data.main && `${Math.floor(data.main.temp - 273)}°C`}
          </div>
        </div>
      ) : (
        <p className="error-msg">Location not found</p>
      )}
    </div>
  );
}

export default Weather;
