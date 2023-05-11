import styles from './AdditionalCard.module.css';
import { useWeather } from '../../WeatherContext';

const AdditionalCard = function ({ num, title }) {
  const weatherData = useWeather();
  let img;

  if (title === 'Cloudiness') {
    img = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
        />
      </svg>
    );
  } else {
    img = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
        />
      </svg>
    );
  }
  return (
    <div className={`${styles[`additional-card-${num}`]} ${styles['additional-card']}`}>
      <h3 className={styles.title}>{title}</h3>
      {img}
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
