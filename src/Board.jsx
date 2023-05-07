import styles from './Board.module.css';
import TopBanner from './components/TopBanner/TopBanner';
import MainInfoBanner from './components/MainBanner/MainBanner';
import AdditionalInfoBanner1 from './components/AdditionalInfoBanners/AdditionalInfoBanner1';
import AdditionalInfoBanner2 from './components/AdditionalInfoBanners/AdditionalInfoBanner2';
import { useWeather } from './WeatherContext';

const Board = function ({ setIsError, setErrorMessage, setIsLoaded, setFirstEnter }) {
  const weather = useWeather();
  return (
    <div className={styles.app}>
      <TopBanner
        setIsError={setIsError}
        setErrorMessage={setErrorMessage}
        setIsLoaded={setIsLoaded}
        setFirstEnter={setFirstEnter}
      />
      <MainInfoBanner />
      <AdditionalInfoBanner1 />
      <AdditionalInfoBanner2 />
    </div>
  );
};

export default Board;
