import styles from './AdditionalCard.module.css';
import { useWeather } from '../../WeatherContext';

import thermometer from '../../assets/images/icons/thermometer-celsius.svg';
import cloudy from '../../assets/images/icons/cloudy.svg';

const AdditionalCard = function ({ num, title }) {
  const weatherData = useWeather();
  let path;

  if (title === 'Cloudiness') {
    path = cloudy;
  } else {
    path = thermometer;
  }
  return (
    <div className={`${styles[`additional-card-${num}`]} ${styles['additional-card']}`}>
      <h3 className={styles.title}>{title}</h3>
      <img className={styles.icon} src={path} alt="" />
      {title === 'Cloudiness' ? (
        <>
          <p className={styles.value}>
            {weatherData.cloudy} <span>%</span>
          </p>
          <p className={styles.description}>The sky fraction obscured by clouds</p>
        </>
      ) : (
        <>
          <p className={styles.value}>
            {weatherData.feelsLike} <span>℃</span>
          </p>
          <p className={styles.description}>How hot or cold it really feels</p>
        </>
      )}
    </div>
  );
};
export default AdditionalCard;
