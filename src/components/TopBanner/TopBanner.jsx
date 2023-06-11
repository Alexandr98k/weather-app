import styles from './TopBanner.module.css';
import Form from '../UI/Form';
import MainWeather from './MainWeather';
import Toggle from '../Toggle/Toggle';

const TopBanner = function ({ setIsLoaded, setFirstEnter, isMovedToggle, setCurTheme }) {
  return (
    <div className={styles.container}>
      {isMovedToggle && <Toggle setCurTheme={setCurTheme} />}
      <Form setIsLoaded={setIsLoaded} setFirstEnter={setFirstEnter} />
      <MainWeather />
    </div>
  );
};
export default TopBanner;
