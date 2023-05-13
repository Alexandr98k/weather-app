import styles from './Starter.module.css';
import Form from './Form';
import Toggle from '../Toggle/Toggle';

import { useTranslation } from 'react-i18next';

const Starter = function ({
  setErrorMessage,
  setIsError,
  setIsLoaded,
  setFirstEnter,
  isError,
  setCurTheme,
}) {
  const { t } = useTranslation();
  return (
    <div className={styles.starter}>
      <div className={styles.container}>
        <Toggle setCurTheme={setCurTheme} />
        <h2 className={styles.title}>{t('starter.title')}</h2>
        <p className={styles.icons}>🌤️🌞☁️🌡️</p>
        <Form
          isError={isError}
          setIsError={setIsError}
          setErrorMessage={setErrorMessage}
          setIsLoaded={setIsLoaded}
          setFirstEnter={setFirstEnter}
        />
      </div>
    </div>
  );
};

export default Starter;
