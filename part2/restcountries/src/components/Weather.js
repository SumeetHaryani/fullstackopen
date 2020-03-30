import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CurrentWeather from './CurrentWeather';
const api_key = process.env.REACT_APP_WEATHER_API_KEY;
const Weather = ({ capital }) => {

  const [weather, setWeather] = useState('');

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`
      )
      .then(response => setWeather(response.data.current));
  }, [capital]);

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <CurrentWeather weather={weather} />
    </div>
  );
};

export default Weather;
