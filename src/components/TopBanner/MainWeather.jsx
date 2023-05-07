import styles from './MainWeather.module.css';
import { useWeather } from '../../WeatherContext';

import getImagePath from '../../helpers/defineIconWeather';

import descriptionIcon from '../../assets/images/icons/weather.svg';
import locationIcon from '../../assets/images/icons/location.svg';
import calendarIcon from '../../assets/images/icons/calendar.svg';

const MainWeather = function () {
  const { time, cloudy, description1, description2, temp, date, location } = useWeather();

  const day = time >= 6 && time <= 20;
  const imagePath = getImagePath(day, cloudy, description1, description2);
  return (
    <div className={styles['container']}>
      <div className={styles['top-container']}>
        <img className={styles['weather-image']} src={imagePath} alt="Weather icon" />
        <h2 className={styles.temperature}>{temp} ℃</h2>
        <div className={styles['clouds-description']}>
          <img
            className={styles['image-description']}
            src={descriptionIcon}
            alt="Description icon"
          />
          <p className={styles.description}>{description2}</p>
        </div>
      </div>
      <div className={styles['bottom-container']}>
        <div className={styles['flex']}>
          <img className={styles['location-icon']} src={locationIcon} alt="Location icon" />
          <p>{location}</p>
        </div>
        <div className={styles['flex']}>
          <img className={styles['calendar-icon']} src={calendarIcon} alt="Calendar icon" />
          <p style={{ marginLeft: '6px' }}>{date}</p>
        </div>
      </div>
    </div>
  );
};
export default MainWeather;
