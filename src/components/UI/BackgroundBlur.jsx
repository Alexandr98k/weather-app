import styles from './BackgroundBlur.module.css';

const BackgroundBlur = function ({ setIsError }) {
  return <div className={styles.backdrop} onClick={() => setIsError(false)}></div>;
};

export default BackgroundBlur;
