import { useWeather } from '../../WeatherContext';
import styles from './AdditionalInfoBanner1.module.css';
import compass from '../../assets/images/compass.png';

const AdditionalInfoBanner1 = function () {
  const weatherData = useWeather();
  return (
    <div className={styles.container}>
      <img className={styles.image} src={compass} alt="" />
      <div className={styles.text}>
        <h4 className={styles.title}>Longitude: {weatherData.lon}</h4>
        <p className={styles.description}>
          Longitude measures distance east or west of the prime meridian.
        </p>
        <h4 className={styles.title}>Latitude: {weatherData.lat}</h4>
        <p className={styles.description}>
          Latitude lines start at the equator (0 degrees latitude) and run east and west, parallel
          to the equator.
        </p>
      </div>
    </div>
  );
};

export default AdditionalInfoBanner1;
