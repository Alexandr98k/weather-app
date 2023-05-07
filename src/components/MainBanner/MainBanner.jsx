import styles from './MainBanner.module.css';
import MainCard from './MainCard';
import AdditionalCard from '../UI/AdditionalCard';

const MainBanner = function () {
  const mainCards = [{ type: 'Wind' }, { type: 'Pressure' }, { type: 'Sunrise and sunset' }];
  const additionalCards = [{ type: 'Feels like' }, { type: 'Cloudiness' }];
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Today's Highlights</h2>
      <div className={styles['card-container']}>
        {mainCards.map((item, i) => {
          return <MainCard className={styles.card} key={i} num={i + 1} title={item.type} />;
        })}
        {additionalCards.map((item, i) => {
          return <AdditionalCard className={styles.card} key={i} num={i + 1} title={item.type} />;
        })}
      </div>
    </div>
  );
};

export default MainBanner;