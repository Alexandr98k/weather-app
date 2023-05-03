import { useState } from 'react';
import './App.css';
//images
import iconLocation from './assets/icons/location-icon.png';
//components
import WeatherInfo from './components/WeatherInfo';
import Card from './components/UI/Card';
import Input from './components/Input';
import Button from './components/Button';
import Loader from './components/Loader';
import Error from './components/Error';
//helper functions
import { getWeatherData } from './helper';
import { checkInternetConnection } from './helper';
import { checkIfInputNotEmpty } from './helper';
import { getCityData } from './helper';
import { calcApproximateTime } from './helper';
import { fixedHeightMobile } from './helper';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [weatherStats, setWeatherStats] = useState({});
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  //API KEY (save in enviroment variable = in other (not vite.js) it can be process.env)
  const API_KEY = import.meta.env.VITE_API_KEY;

  //fixed 100vh on mobile
  fixedHeightMobile();

  //handle submit form
  const handleFormSubmit = async function (e) {
    try {
      e.preventDefault();
      e.stopPropagation();

      //reset weather-data state object
      setWeatherStats({});
      //
      checkIfInputNotEmpty(inputValue);
      //enable loader
      setIsLoaded(true);
      //reset error status and error message
      setIsError(false);
      setErrorMessage('');

      //check if internet connection is online
      checkInternetConnection();

      //FIRST AJAX-CALL - getting coordinates by name
      const cityData = await getCityData(inputValue, API_KEY);

      //Define time
      const localCityTime = calcApproximateTime(cityData);

      //Second AJAX-CALL - getting weather by name
      const weatherData = await getWeatherData(cityData, API_KEY, localCityTime);
      setWeatherStats({
        ...weatherData,
      });
      setIsLoaded(false);
    } catch (error) {
      console.error('Error caught here:', error.message);

      setIsError(true);
      setErrorMessage(error.message);
      setIsLoaded(false);
    }
  };

  return (
    <Card>
      <form className="form" onSubmit={handleFormSubmit}>
        <img className="location-image" src={iconLocation} alt="" />
        <Input inputValue={inputValue} setInputValue={setInputValue} />
        <Button />
      </form>
      {/* {weatherStats.time} */}
      {isLoaded && <Loader />}
      {isError && <Error errMessage={errorMessage} />}
      {Object.keys(weatherStats).length !== 0 && <WeatherInfo weatherData={weatherStats} />}
    </Card>
  );
}

export default App;
