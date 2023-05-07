import styles from './Form.module.css';
import { useState } from 'react';
import { useWeatherDispatch } from '../../WeatherContext';
import searchIcon from '../../assets/images/icons/search.svg';
//helper functions
import getCityData from '../../helpers/getCityData';
import getWeatherData from '../../helpers/getWeatherData';
import { checkInternetConnection } from '../../helper';
import { checkInputEmpty } from '../../helper';

const Form = function ({ setIsError, setErrorMessage, setIsLoaded, setFirstEnter }) {
  // useState for isLoaded, isError, errorMessage
  //dispatch success info about the weather in city
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
      />
      <button type="submit" className={styles.button}>
        <img src={searchIcon} alt="Search icon" />
      </button>
    </form>
  );
};

export default Form;