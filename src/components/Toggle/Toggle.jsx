import styles from './Toggle.module.css';
import Languages from './Languages';
import ThemeCard from './ThemeCard';

const Toggle = function ({ setCurrentTheme }) {
  return (
    <div className={styles.container}>
      <Languages />
      <ThemeCard setCurrentTheme={setCurrentTheme} />
    </div>
  );
};
export default Toggle;
