import styles from './Form.module.css';
import { useState } from 'react';
import { useWeatherDispatch } from '../../context/WeatherContext';
import { useErrorDispatch } from '../../context/ErrorContext';
import { useError } from '../../context/ErrorContext';
//helper functions
import getCityData from '../../helpers/getCityData';
import getWeatherData from '../../helpers/getWeatherData';
import { checkInternetConnection } from '../../helper';
import { checkInputEmpty } from '../../helper';
import { useTranslation } from 'react-i18next';

const Form = function ({ setIsLoaded, setFirstEnter }) {
  const [inputValue, setInputValue] = useState('');
  const { t } = useTranslation();
  const API_KEY = import.meta.env.VITE_API_KEY;

  const dispatchWeather = useWeatherDispatch();
  const dispatchError = useErrorDispatch();
  const errorData = useError();

  const handleFormSubmit = async function (e) {
    //use iife for wrapping handle-submit form async function
    try {
      e.preventDefault();
      e.stopPropagation();
      setIsLoaded(true);

      //check if internet connection is online
      checkInternetConnection();

      //check input field
      checkInputEmpty(inputValue);

      //FIRST AJAX-CALL - getting coordinates by name
      const cityData = await getCityData(inputValue, API_KEY);

      //Second AJAX-CALL - getting weather by name
      const weatherData = await getWeatherData(cityData, API_KEY);

      dispatchWeather({ type: 'adding', value: weatherData });

      setIsLoaded(false);
      setFirstEnter(false);
    } catch (error) {
      console.error('Error caught here:', error.message);

      dispatchError({ type: 'error', value: error.message });
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
        placeholder={t('form.input')}
        disabled={errorData.isError}
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
