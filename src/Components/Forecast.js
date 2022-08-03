import React from 'react';
import Details from './Details';
import Hero from './Hero';
import Weekly from './Weekly';

const Forecast = ({ weatherData }) => {
  return (
    <div className='bg container'>
      <Hero weatherData={weatherData} />
      <Weekly weatherData={weatherData} />
      <Details weatherData={weatherData} />
    </div>
  );
};

export default Forecast;
