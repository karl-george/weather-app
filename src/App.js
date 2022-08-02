import { useEffect, useState } from 'react';
import Forecast from './Components/Forecast';
import Loading from './Components/Loading';
import './App.css';

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLat(pos.coords.latitude);
        setLong(pos.coords.longitude);
      });

      await fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    };

    fetchData();
  }, [lat, long]);

  return (
    <div className='App'>
      {typeof data.current != 'undefined' ? (
        <Forecast weatherData={data} />
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
}

export default App;
