import { useWeather } from '../../WeatherContext';
import styles from './AdditionalInfoBanner2.module.css';
import humidity from '../../assets/images/humidity.png';
import { useTranslation } from 'react-i18next';

const AdditionalInfoBanner2 = function () {
  const { t } = useTranslation();
  const weatherData = useWeather();
  return (
    <div className={styles.container}>
      <img className={styles.image} src={humidity} alt="" />
      <div className={styles.text}>
        <h4 className={styles.title}>
          {t('additional-banner-2.title')} {weatherData.humid} %
        </h4>
        <p className={styles.description}>{t('additional-banner-2.text-1')}</p>
        <p className={styles.description}>{t('additional-banner-2.text-2')}</p>
      </div>
    </div>
  );
};

export default AdditionalInfoBanner2;
