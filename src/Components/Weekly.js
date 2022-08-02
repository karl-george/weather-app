const Weekly = ({ weatherData }) => {
  const futureWeather = [];

  for (let i = 1; i < 6; i++) {
    const element = weatherData.daily[i];
    futureWeather.push(element);
  }

  // Move into a utils file
  const calculateDate = (item) => {
    return new Date(item.dt * 1000 - weatherData.timezone_offset * 1000)
      .toString()
      .slice(0, 3);
  };

  const weeklyElements = futureWeather.map((item) => {
    return (
      <div className='weekly-elements' key={item.dt}>
        <p>{calculateDate(item)}</p>
        <img
          src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          className='weekly-icon'
        ></img>
        <p>{Math.round(item.temp.day)}°</p>
      </div>
    );
  });

  console.log(weatherData);

  return (
    <div className='weekly-container'>
      <div className='grid grid--1x5'>{weeklyElements}</div>
      <div className='divider'></div>
    </div>
  );
};

export default Weekly;
{
  /* <div>
          <p>Tue</p>
          <img src=''></img>
          <p>Temp</p>
        </div> */
}
