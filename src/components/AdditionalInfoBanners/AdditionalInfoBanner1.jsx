import { useWeather } from '../../WeatherContext';
import styles from './AdditionalInfoBanner1.module.css';
import compass from '../../assets/images/compass.png';
import { useTranslation } from 'react-i18next';

const AdditionalInfoBanner1 = function () {
  const { t } = useTranslation();
  const weatherData = useWeather();
  return (
    <div className={styles.container}>
      <img className={styles.image} src={compass} alt="" />
      <div className={styles.text}>
        <h4 className={styles.title}>
          {t('additional-banner-1.title-1')} {weatherData.lon}
        </h4>
        <p className={styles.description}>{t('additional-banner-1.text-1')}</p>
        <h4 className={styles.title}>
          {t('additional-banner-1.title-2')} {weatherData.lat}
        </h4>
        <p className={styles.description}>{t('additional-banner-1.text-2')}</p>
      </div>
    </div>
  );
};

export default AdditionalInfoBanner1;
