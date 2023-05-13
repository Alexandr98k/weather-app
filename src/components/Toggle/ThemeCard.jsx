import styles from './ThemeCard.module.css';
import { useThemeDispatch } from '../../context/ThemeContext';
import { useTheme } from '../../context/ThemeContext';
import useThemeHook from '../../hooks/useThemeHook';
import sunImage from '../../assets/images/icons/sun.svg';
import moonImage from '../../assets/images/icons/moon.svg';

const ThemeCard = function ({ setCurTheme }) {
  const dispatch = useThemeDispatch();
  const { theme } = useTheme();

  useThemeHook(setCurTheme, dispatch);

  const btnClickHandler = function () {
    dispatch({ type: theme === 'dark' ? 'light' : 'dark' });
    setCurTheme(theme === 'dark' ? 'light' : 'dark');
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
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
