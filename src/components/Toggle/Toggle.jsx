import styles from './Toggle.module.css';
import Languages from './Languages';
import ThemeCard from './ThemeCard';

const Toggle = function ({ setCurTheme }) {
  return (
    <div className={styles.container}>
      <Languages />
      <ThemeCard setCurTheme={setCurTheme} />
    </div>
  );
};
export default Toggle;
