import React from 'react';
import Hero from './Hero';

const Forecast = ({ weatherData }) => {
  return (
    <div className='bg'>
      <Hero weatherData={weatherData} />
    </div>
  );
};

export default Forecast;

// Hero Component
// Info Component
// Weekly Component

// May need a card component or the individual cards
