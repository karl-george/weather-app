import { calculateDay } from './utils/utils';


const Weekly = ({ weatherData }) => {
  const futureWeather = [];

  for (let i = 1; i < 6; i++) {
    const element = weatherData.daily[i];
    futureWeather.push(element);
  }

  const weeklyElements = futureWeather.map((item) => {
    return (
      <div className='weekly-elements' key={item.dt}>
        <p>{calculateDay(item, weatherData.timezone_offset)}</p>
        <img
          src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          className='weekly-icon'
        ></img>
        <p>{Math.round(item.temp.day)}&deg;</p>
      </div>
    );
  });

  return (
    <div className='container'>
      <div className='grid grid--1x5'>{weeklyElements}</div>
      <div className='divider'></div>
    </div>
  );
};

export default Weekly;
