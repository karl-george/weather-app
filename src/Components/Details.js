import { calculateTime } from './utils/utils';

const Details = ({ weatherData }) => {
  // console.log(weatherData);

  return (
    <div>
      <p>
        {console.log(
          calculateTime(
            weatherData.current.sunrise,
            weatherData.timezone_offset
          )
        )}
      </p>
    </div>
  );
};

export default Details;
