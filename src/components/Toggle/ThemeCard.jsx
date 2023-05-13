import styles from './ThemeCard.module.css';
import { useThemeDispatch } from '../../ThemeContext';
import { useTheme } from '../../ThemeContext';
import sunImage from '../../assets/images/icons/sun.svg';
import moonImage from '../../assets/images/icons/moon.svg';

const ThemeCard = function ({ setCurTheme }) {
  const dispatch = useThemeDispatch();
  const { theme } = useTheme();

  const btnClickHandler = function () {
    dispatch({ type: 'TOGGLE_THEME' });
    setCurTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button className={styles.button} onClick={btnClickHandler}>
      {theme === 'light' ? (
        <img src={moonImage} alt="Moon icon" />
      ) : (
        <img src={sunImage} alt="Sun icon" />
      )}
    </button>
  );
};
export default ThemeCard;
