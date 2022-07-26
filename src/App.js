import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(() => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return <div className='App'></div>;
}

export default App;
