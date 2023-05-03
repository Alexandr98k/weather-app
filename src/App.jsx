import { useState } from 'react';
import './App.css';
//components
import WeatherInfo from './components/WeatherInfo';
import Card from './components/UI/Card';
import Form from './components/Form';
import Loader from './components/Loader';
import Error from './components/Error';
//helper functions
import defineHeightMobileDisplay from './helpers/defineHeightMobileDisplay';

function App() {
  const [weatherStats, setWeatherStats] = useState({});
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  //check height for mobile app
  defineHeightMobileDisplay();

  return (
    <Card>
      <Form
        setWeatherStats={setWeatherStats}
        setIsError={setIsError}
        setErrorMessage={setErrorMessage}
        setIsLoaded={setIsLoaded}
      />
      {isLoaded && <Loader />}
      {isError && <Error errMessage={errorMessage} />}
      {Object.keys(weatherStats).length !== 0 && <WeatherInfo weatherData={weatherStats} />}
    </Card>
  );
}

export default App;
