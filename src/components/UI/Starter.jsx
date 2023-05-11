import styles from './Starter.module.css';
import Form from './Form';
import ThemeCard from './ThemeCard';

const Starter = function ({
  setErrorMessage,
  setIsError,
  setIsLoaded,
  setFirstEnter,
  setCurrentTheme,
  isError,
}) {
  return (
    <div className={styles.starter}>
      <ThemeCard isStarterThemeIcon={true} setCurrentTheme={setCurrentTheme} />
      <div className={styles.container}>
        <h2 className={styles.title}>Enter the name of the city and find out the weather</h2>
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
