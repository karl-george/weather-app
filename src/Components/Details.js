import moment from 'moment';

const Details = ({ weatherData }) => {
  console.log(weatherData);

  return (
    <div className='container'>
      <div className='grid grid--1x2'>
        <div className='detail-block sunrise-block'>
          <img src='https://openweathermap.org/img/wn/01d@2x.png'></img>
          <h4>Sunrise</h4>
          <p>
            {moment
              .unix(weatherData.current.sunrise)
              .format('h:mm a')
              .toUpperCase()}
          </p>
        </div>
        <div className='detail-block sunset-block'>
          <img src='https://openweathermap.org/img/wn/01n@2x.png'></img>
          <h4>Sunset</h4>
          <p>
            {moment
              .unix(weatherData.current.sunset)
              .format('h:mm a')
              .toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
