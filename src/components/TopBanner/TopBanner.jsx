import styles from './TopBanner.module.css';
import Form from '../UI/Form';
import MainWeather from './MainWeather';

const TopBanner = function ({ setIsLoaded, setIsError, setErrorMessage, setFirstEnter }) {
  return (
    <div className={styles.container}>
      <Form
        key="form"
        setIsError={setIsError}
        setErrorMessage={setErrorMessage}
        setIsLoaded={setIsLoaded}
        setFirstEnter={setFirstEnter}
      />
      <MainWeather />
    </div>
  );
};
export default TopBanner;
