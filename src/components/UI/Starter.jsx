import styles from './Starter.module.css';
import Form from './Form';
import Toggle from '../Toggle/Toggle';

import { useTranslation } from 'react-i18next';

const Starter = function ({ setIsLoaded, setFirstEnter, setCurTheme }) {
  const { t } = useTranslation();
  return (
    <div className={styles.starter}>
      <div className={styles.container}>
        <Toggle setCurTheme={setCurTheme} />
        <h2 className={styles.title}>{t('starter.title')}</h2>
        <div className={styles['icons-container']}>
          <p className={`${styles.icons} ${styles['icons-right']}`}>🌤️🌞</p>
          <p className={`${styles.icons} ${styles['icons-left']}`}>☁️🌡️</p>
        </div>
        <Form setIsLoaded={setIsLoaded} setFirstEnter={setFirstEnter} />
      </div>
    </div>
  );
};

export default Starter;
