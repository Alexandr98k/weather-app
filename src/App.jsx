import './App.css';
import { Fragment, useState, useEffect } from 'react';
import { WeatherProvider } from './WeatherContext';
import { ThemeProvider } from './ThemeContext';
import { useTheme } from './ThemeContext';
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
  const [currentTheme, setCurrentTheme] = useState(theme);
	
  //визначаємо висоту екрану на мобілці і фіксимо баг з панелю
  useEffect(() => {
    defineHeightMobileDisplay();
  }, []);

  return (
    <div className={`app ${currentTheme === 'dark' ? 'dark' : 'light'}`}>
      <ThemeProvider>
        <WeatherProvider>
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
              setCurrentTheme={setCurrentTheme}
              setIsError={setIsError}
              setErrorMessage={setErrorMessage}
              setIsLoaded={setIsLoaded}
              setFirstEnter={setFirstEnter}
              isError={isError}
            />
          ) : (
            <Board
              isError={isError}
              setCurrentTheme={setCurrentTheme}
              setIsError={setIsError}
              setErrorMessage={setErrorMessage}
              setIsLoaded={setIsLoaded}
              setFirstEnter={setFirstEnter}
            />
          )}
        </WeatherProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

//Зробити кастомний хук для отримання ширини екрану, щоб зчитувалась ширина на початку запуску програми та після кожного ресайзу також
