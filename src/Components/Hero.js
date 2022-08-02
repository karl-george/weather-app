const Hero = ({ weatherData }) => {
  const date = new Date();
  const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit' };
  const weatherDesc = weatherData.current.weather[0].description;
  const currentWeatherIcon = `https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@4x.png`;
  const weatherTemp = Math.round(weatherData.current.temp);
  const weatherMin = Math.round(weatherData.daily[0].temp.min);
  const weatherMax = Math.round(weatherData.daily[0].temp.max);

  return (
    <div className='hero'>
      <div className='hero-date'>
        <h2>{date.toLocaleDateString('en-GB', dateOptions)}</h2>
        <h3>{date.toLocaleTimeString([], timeOptions)}</h3>
      </div>
      <p className='hero-temp'>{weatherTemp}°</p>
      <div className='current-weather-icon'>
        <img src={currentWeatherIcon}></img>
      </div>
      <p className='current-weather-desc'>{weatherDesc}</p>
      <p className='current-min-max'>
        {weatherMin}° / {weatherMax}°
      </p>
      <div className='divider'></div>
    </div>
  );
};

export default Hero;
