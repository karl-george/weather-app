const Hero = ({ weatherData }) => {
  const date = new Date();
  const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  const weatherDesc = weatherData.current.weather[0].description;
  const currentWeatherIcon = `https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`;

  return (
    <div className='hero'>
      <div className='bg-hero rain'>
        <div className='hero-date'>
          <h3>{date.toLocaleDateString('en-UK', dateOptions)}</h3>
        </div>
        <div className='current-weather-icon'>
          <img src={currentWeatherIcon}></img>
        </div>
        {weatherDesc}
      </div>
    </div>
  );
};

export default Hero;
