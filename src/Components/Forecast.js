import Details from './Details';
import Footer from './Footer';
import Hero from './Hero';
import Weekly from './Weekly';

const Forecast = ({ weatherData }) => {
  return (
    <div className='bg container'>
      <Hero weatherData={weatherData} />
      <Weekly weatherData={weatherData} />
      <Details weatherData={weatherData} />
      <Footer />
    </div>
  );
};

export default Forecast;
