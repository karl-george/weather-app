import React from 'react';
import Hero from './Hero';
import Weekly from './Weekly';

const Forecast = ({ weatherData }) => {
  return (
    <div className='bg'>
      <Hero weatherData={weatherData} />
      <Weekly weatherData={weatherData} />
    </div>
  );
};

export default Forecast;

// Hero Component
// Info Component
// Weekly Component

// May need a card component or the individual cards
