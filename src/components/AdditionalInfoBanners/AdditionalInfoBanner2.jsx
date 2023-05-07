import { useWeather } from '../../WeatherContext';
import styles from './AdditionalInfoBanner2.module.css';
import humidity from '../../assets/images/humidity.png';

const AdditionalInfoBanner2 = function () {
  const weatherData = useWeather();
  return (
    <div className={styles.container}>
      <img className={styles.image} src={humidity} alt="" />
      <div className={styles.text}>
        <h4 className={styles.title}>Humidity: {weatherData.humid} % </h4>
        <p className={styles.description}>
          Humidity is the concentration of water vapor present in the air. Water vapor, the gaseous
          state of water, is generally invisible to the human eye.
        </p>
        <p className={styles.description}>
          The same amount of water vapor results in higher relative humidity in cool air than warm
          air.
        </p>
      </div>
    </div>
  );
};

export default AdditionalInfoBanner2;
