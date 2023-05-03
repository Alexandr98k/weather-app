import styles from './WeatherInfo.module.css';

import windIcon from '../assets/icons/wind.png';
import humidityIcon from '../assets/icons/humidity.png';

//helper function
import { getImagePath } from '../defineIconWeather';

const WeatherInfo = function ({ weatherData }) {
  const { temp, description1, description2, humid, wind, name, cloudy, time } = weatherData;
  //check if day (not night)
  const day = time > 6 && time < 20;

  const imagePath = getImagePath(day, cloudy, description1, description2);

  return (
    <div>
      <h1 className={styles['city-name']}>{name}</h1>
      <div className={styles['image-container']}>
        <img
          className={styles.image}
          src={imagePath}
          alt="Weather image"
          width="300px"
          height="270px"
        />
      </div>
      <div className={styles['main-info']}>
        <h2 className={styles.temperature}>{temp}°C</h2>
        <p className={styles.description}>
          {description1} ({description2})
        </p>
      </div>
      <div className={styles['additional-info']}>
        <div className={styles['info-item']}>
          <img className={styles['info-image']} src={humidityIcon} alt="" />
          <p className={styles['info-stats']}>{humid}%</p>
          <p className={styles['info-text']}>Humidity</p>
        </div>
        <div className={styles['info-item']}>
          <img className={styles['info-image']} src={windIcon} alt="" />
          <p className={styles['info-stats']}>{wind} m/s</p>
          <p className={styles['info-text']}>Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
