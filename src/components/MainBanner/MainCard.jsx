import { useWeather } from '../../WeatherContext';
import styles from './MainCard.module.css';
import windImage from '../../assets/images/wind.png';
import pressureImage from '../../assets/images/pressure.png';
import sunMoving from '../../assets/images/sun-moving.png';

const MainCard = function ({ num, title }) {
  const weatherData = useWeather();
  let imgPath;
  let info;
  switch (title) {
    case 'Wind':
      imgPath = windImage;
      info = (
        <div className={styles.container}>
          <p className={styles['big-paragraph']}>
            {weatherData.wind?.windSpeed} <span>m/s</span>
          </p>
          <p className={styles['big-paragraph']}>
            {weatherData.wind?.windSide} <span>deg</span>
          </p>
        </div>
      );
      break;
    case 'Pressure':
      imgPath = pressureImage;
      info = (
        <div className={`${styles.container} ${styles['container-pressure']}`}>
          <p className={styles['big-paragraph']}>
            {weatherData.pressure} <span>mm</span>
          </p>
        </div>
      );
      break;
    case 'Sunrise and sunset':
      imgPath = sunMoving;
      info = (
        <div className={`${styles.container} ${styles['container-sun']}`}>
          <div>
            <p className={styles['sun-moving']}>Sunrise</p>
            <p>{weatherData.sunrise}</p>
          </div>
          <div>
            <p className={styles['sun-moving']}>Sunset</p>
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
      <h3 className={styles.title}>{title}</h3>
      <img className={styles.image} src={imgPath} alt="" />
      {info}
    </div>
  );
};
export default MainCard;
