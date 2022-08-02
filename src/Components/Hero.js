const Hero = ({ weatherData }) => {
  const date = new Date();
  const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit' };
  const weatherDesc = weatherData.current.weather[0].description;
  const currentWeatherIcon = `https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`;
  const weatherTemp = Math.round(weatherData.current.temp);

  return (
    <div className='hero'>
      <div className='hero-date'>
        <h2>{date.toLocaleDateString('en-GB', dateOptions)}</h2>
        <h3>{date.toLocaleTimeString([], timeOptions)}</h3>
      </div>
      <p className='hero-temp'>{weatherTemp}°</p>
    </div>
  );
};

export default Hero;

// <div className='current-weather-icon'>
//   <img src={currentWeatherIcon}></img>
// </div>

// {weatherDesc}
