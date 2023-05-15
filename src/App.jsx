import './App.css';
import { useState, useEffect } from 'react';
import { WeatherProvider } from './context/WeatherContext';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';
import useMoveToggleComponent from './hooks/useMoveToggleComponent';

import defineHeightMobileDisplay from './helpers/defineHeightMobileDisplay';
import translateErrors from './helpers/translateErrors';
import translateWeatherDescription from './helpers/translateWeatherDescription';
import LoadingScreen from './components/LoadingScreen';
import ModalScreen from './components/ModalScreen';
import Main from './components/Main';

//Доробити час точний, щоб не було перебою в годинах
function App() {
  const [firstEnter, setFirstEnter] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();
  const [curTheme, setCurTheme] = useState(theme);

  //fix height on mobile
  useEffect(() => {
    defineHeightMobileDisplay();
  }, []);

  //Define if the toggle block needs to be moved to a different place in markup
  const isMovedToggle = useMoveToggleComponent();

  return (
    <WeatherProvider>
      <ThemeProvider>
        <div className={`app ${curTheme === 'dark' ? 'dark' : 'light'}`}>
          {isError && <ModalScreen errorMessage={errorMessage} setIsError={setIsError} />}
          {isLoaded && <LoadingScreen />}
          <Main
            firstEnter={firstEnter}
            setIsError={setIsError}
            setErrorMessage={setErrorMessage}
            setIsLoaded={setIsLoaded}
            setFirstEnter={setFirstEnter}
            isError={isError}
            setCurTheme={setCurTheme}
            isMovedToggle={isMovedToggle}
          />
        </div>
      </ThemeProvider>
    </WeatherProvider>
  );
}

export default App;
