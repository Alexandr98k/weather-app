import './App.css';
import { Fragment, useState } from 'react';
import { WeatherProvider } from './WeatherContext';
import { useWeather } from './WeatherContext';

import Board from './Board';
import Loader from './components/UI/Loader';
import BackgroundBlur from './components/UI/BackgroundBlur';
import Modal from './components/UI/Modal';
import Starter from './components/UI/Starter';

//Доробити час точний, щоб не було перебою в годинах
function App() {
  const [firstEnter, setFirstEnter] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  //setweather stats
  const ctxWeather = useWeather();
  console.log(ctxWeather);

  return (
    <div className="app">
      <WeatherProvider>
        {isError && (
          <Fragment>
            <Modal errorMessage={errorMessage} />
            <BackgroundBlur setIsError={setIsError} />
          </Fragment>
        )}
        {isLoaded && (
          <Fragment>
            <Loader />
            <BackgroundBlur />
          </Fragment>
        )}
        {firstEnter ? (
          <Starter
            setIsError={setIsError}
            setErrorMessage={setErrorMessage}
            setIsLoaded={setIsLoaded}
            setFirstEnter={setFirstEnter}
          />
        ) : (
          <Board
            setIsError={setIsError}
            setErrorMessage={setErrorMessage}
            setIsLoaded={setIsLoaded}
            setFirstEnter={setFirstEnter}
          />
        )}
      </WeatherProvider>
    </div>
  );
}

export default App;
