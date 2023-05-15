import styles from './MainWeather.module.css';
import { useWeather } from '../../context/WeatherContext';

import getImagePath from '../../helpers/defineIconWeather';
import translateWeatherDescription from '../../helpers/translateWeatherDescription';
import { ReactComponent as WeatherIcon } from '../../assets/images/icons/weather.svg';
import { ReactComponent as LocationIcon } from '../../assets/images/icons/location.svg';
import { ReactComponent as CalendarIcon } from '../../assets/images/icons/calendar.svg';
import { useTranslation } from 'react-i18next';

const MainWeather = function () {
  const { t } = useTranslation();
  const { time, cloudy, description1, description2, temp, date, location } = useWeather();
  const day = time >= 6 && time <= 20;
  const imagePath = getImagePath(day, cloudy, description1, description2);
  const translatedDescription = translateWeatherDescription(description1, description2);

  return (
    <div className={styles['container']}>
      <div className={styles['top-container']}>
        <img className={styles['weather-image']} src={imagePath} alt="Weather icon" />
        <h2 className={styles.temperature}>{temp} ℃</h2>
        <div className={styles['clouds-description']}>
          <WeatherIcon className={styles['image-description']} />
          <p className={styles.description}>{t(translatedDescription)}</p>
        </div>
      </div>
      <div className={styles['bottom-container']}>
        <div className={styles['flex']}>
          <LocationIcon className={styles['location-icon']} />
          <p>{location}</p>
        </div>
        <div className={styles['flex']}>
          <CalendarIcon className={styles['calendar-icon']} />
          <p style={{ marginLeft: '6px' }}>{date}</p>
        </div>
      </div>
    </div>
  );
};
export default MainWeather;
