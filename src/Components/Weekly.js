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
      <div key={item.dt}>
        <p>{calculateDate(item)}</p>
        <p>img</p>
        <p>temp</p>
      </div>
    );
  });

  return (
    <div className='weekly-container'>
      <div className='grid grid--3x5'>{weeklyElements}</div>
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
