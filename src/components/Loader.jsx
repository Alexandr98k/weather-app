import styles from './Loader.module.css';

const Loader = function () {
  return (
    <div className={styles['loader-container']}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
