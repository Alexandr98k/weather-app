import { useState } from 'react';
import styles from './Form.module.css';
//images
import iconLocation from '../assets/icons/location-icon.png';
//components
import Input from './Input';
import Button from './Button';
//helper functions
import getCityData from '../helpers/getCityData';
import getWeatherData from '../helpers/getWeatherData';
import { checkInternetConnection } from '../helper';
import { checkIfInputNotEmpty } from '../helper';
import calcApproximateTime from '../helpers/calcApproximateTime';

const Form = function ({ setWeatherStats, setIsError, setErrorMessage, setIsLoaded }) {
  const [inputValue, setInputValue] = useState('');

  //API KEY (save in enviroment variable = in other (not vite.js) it can be process.env)
  const API_KEY = import.meta.env.VITE_API_KEY;

  //handle submit form
  const handleFormSubmit = async function (e) {
    //use iife for wrapping handle-submit form async function
    try {
      e.preventDefault();
      e.stopPropagation();

      //reset states and starts loader
      setWeatherStats({});
      setIsLoaded(true);
      setIsError(false);
      setErrorMessage('');

      //check if internet connection is online
      checkInternetConnection();

      //check input field
      checkIfInputNotEmpty(inputValue);

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
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <img className={styles['location-icon']} src={iconLocation} alt="" />
      <Input inputValue={inputValue} setInputValue={setInputValue} />
      <Button />
    </form>
  );
};

export default Form;
