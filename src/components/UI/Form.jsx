import styles from './Form.module.css';
import { useState } from 'react';
import { useWeatherDispatch } from '../../WeatherContext';
//helper functions
import getCityData from '../../helpers/getCityData';
import getWeatherData from '../../helpers/getWeatherData';
import { checkInternetConnection } from '../../helper';
import { checkInputEmpty } from '../../helper';

const Form = function ({ setIsError, setErrorMessage, setIsLoaded, setFirstEnter, isError }) {
  const [inputValue, setInputValue] = useState('');
  const API_KEY = import.meta.env.VITE_API_KEY;

  const dispatch = useWeatherDispatch();

  const handleFormSubmit = async function (e) {
    //use iife for wrapping handle-submit form async function
    try {
      e.preventDefault();
      e.stopPropagation();

      //reset states and starts loader
      setIsLoaded(true);
      setIsError(false);
      setErrorMessage('');

      //check if internet connection is online
      checkInternetConnection();

      //check input field
      checkInputEmpty(inputValue);

      //FIRST AJAX-CALL - getting coordinates by name
      const cityData = await getCityData(inputValue, API_KEY);

      //Second AJAX-CALL - getting weather by name
      const weatherData = await getWeatherData(cityData, API_KEY);

      dispatch({ type: 'adding', value: weatherData });

      setIsLoaded(false);
      setFirstEnter(false);
    } catch (error) {
      console.error('Error caught here:', error.message);
      setIsError(true);
      setErrorMessage(error.message);
      setIsLoaded(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles['input-container']}>
      <input
        className={styles.input}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        type="text"
        placeholder="Enter city name"
        disabled={isError}
      />
      <button type="submit" className={styles.button}>
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 15L21 21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>
    </form>
  );
};

export default Form;
