import React from 'react';
const CurrentWeather = ({ weather }) => {
  //console.log(props.weather);
  if (!weather) {
    return <div></div>;
  }
  const { temperature, weather_icons, wind_speed, wind_dir } = weather;

  console.log('CurrentWeather -> weather_icons', weather_icons);

  return (
    <div>
      <b>temperature: </b>
      {temperature} Celcius
      <br />
      {weather_icons.map(icon => (
        <img width='100' src={icon} alt='icon'></img>
      ))}
      <br />
      <b>wind: </b> {wind_speed} direction {wind_dir}
    </div>
  );
};
export default CurrentWeather;
