import moment from 'moment';

const Details = ({ weatherData }) => {
  // console.log(weatherData);

  return (
    <div>
      <p>
        {moment
          .unix(weatherData.current.sunrise)
          .format('h:mm a')
          .toUpperCase()}
      </p>
    </div>
  );
};

export default Details;
