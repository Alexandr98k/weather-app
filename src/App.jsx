import './App.css';
import { useState, useEffect, useRef, Fragment } from 'react';
import { useTheme } from './context/ThemeContext';
import { useError } from './context/ErrorContext';
import defineHeightMobileDisplay from './helpers/defineHeightMobileDisplay';
import LoadingScreen from './components/LoadingScreen';
import Main from './components/Main';
import { CSSTransition } from 'react-transition-group';
import Modal from './components/UI/Modal';
import BackgroundBlur from './components/UI/BackgroundBlur';

//Доробити час точний, щоб не було перебою в годинах
function App() {
  const nodeRef = useRef(null);
  const errorData = useError();
  const [firstEnter, setFirstEnter] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();
  const [curTheme, setCurTheme] = useState(theme);
  //fix height on mobile
  useEffect(() => {
    defineHeightMobileDisplay();
  }, []);
  return (
    <div className={`app ${curTheme === 'dark' ? 'dark' : 'light'}`}>
      <CSSTransition
        nodeRef={nodeRef}
        in={errorData.isError}
        classNames={'modal'}
        timeout={500}
        unmountOnExit>
        <Modal nodeRef={nodeRef} />
      </CSSTransition>
      {errorData.isError && <BackgroundBlur />}
      {isLoaded && <LoadingScreen />}
      <Main
        firstEnter={firstEnter}
        setIsLoaded={setIsLoaded}
        setFirstEnter={setFirstEnter}
        setCurTheme={setCurTheme}
      />
    </div>
  );
}

export default App;
