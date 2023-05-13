import './App.css';
import { Fragment, useState, useEffect } from 'react';
import { WeatherProvider } from './WeatherContext';
import { ThemeProvider } from './ThemeContext';
import { useTheme } from './ThemeContext';
import useMoveToggleComponent from './useMoveToggleComponent';
import defineHeightMobileDisplay from './helpers/defineHeightMobileDisplay';

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
  const { theme } = useTheme();
  const [curTheme, setCurTheme] = useState(theme);

  const isMovedToggle = useMoveToggleComponent();

  return (
    <WeatherProvider>
      <ThemeProvider>
        <div className={`app ${curTheme === 'dark' ? 'dark' : 'light'}`}>
          {isError && (
            <Fragment>
              <Modal errorMessage={errorMessage} setIsError={setIsError} />
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
              isError={isError}
              setCurTheme={setCurTheme}
            />
          ) : (
            <Board
              isMovedToggle={isMovedToggle}
              isError={isError}
              setIsError={setIsError}
              setErrorMessage={setErrorMessage}
              setIsLoaded={setIsLoaded}
              setFirstEnter={setFirstEnter}
              setCurTheme={setCurTheme}
            />
          )}
        </div>
      </ThemeProvider>
    </WeatherProvider>
  );
}

export default App;
