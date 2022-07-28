import React from 'react';
import Hero from './Hero';

const Forecast = ({ weather }) => {
  return (
    <div className='bg'>
      <Hero weather={weather} />
    </div>
  );
};

export default Forecast;

// Hero Component
// Info Component
// Weekly Component

// May need a card component or the individual cards
