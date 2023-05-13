import { useWeather } from '../../context/WeatherContext';
import styles from './MainCard.module.css';
import windImage from '../../assets/images/wind.png';
import pressureImage from '../../assets/images/pressure.png';
import sunMoving from '../../assets/images/sun-moving.png';
import { useTranslation } from 'react-i18next';

const MainCard = function ({ num, title }) {
  const { t } = useTranslation();
  const weatherData = useWeather();
  let imgPath;
  let info;
  let titleTranslation;

  switch (title) {
    case 'Wind':
      titleTranslation = <h3 className={styles.title}>{t('main-banner.wind-title')}</h3>;
      imgPath = windImage;
      info = (
        <div className={styles.container}>
          <p className={styles['big-paragraph']}>
            {weatherData.wind?.windSpeed} <span>{t('main-banner.wind-speed')}</span>
          </p>
          <p className={styles['big-paragraph']}>
            {weatherData.wind?.windSide} <span>{t('main-banner.wind-side')}</span>
          </p>
        </div>
      );
      break;
    case 'Pressure':
      titleTranslation = <h3 className={styles.title}>{t('main-banner.pressure-title')}</h3>;
      imgPath = pressureImage;
      info = (
        <div className={`${styles.container} ${styles['container-pressure']}`}>
          <p className={styles['big-paragraph']}>
            {weatherData.pressure} <span>{t('main-banner.pressure-unit')}</span>
          </p>
        </div>
      );
      break;
    case 'Sunrise and sunset':
      titleTranslation = <h3 className={styles.title}>{t('main-banner.sun-title')}</h3>;
      imgPath = sunMoving;
      info = (
        <div className={`${styles.container} ${styles['container-sun']}`}>
          <div>
            <p className={styles['sun-moving']}>{t('main-banner.sunrise')}</p>
            <p>{weatherData.sunrise}</p>
          </div>
          <div>
            <p className={styles['sun-moving']}>{t('main-banner.sunset')}</p>
            <p>{weatherData.sunset}</p>
          </div>
        </div>
      );
      break;
    default:
      imgPath = '';
      break;
  }

  return (
    <div className={`${styles[`main-card-${num}`]} ${styles.card}`}>
      {titleTranslation}
      <img className={styles.image} src={imgPath} alt="" />
      {info}
    </div>
  );
};
export default MainCard;
