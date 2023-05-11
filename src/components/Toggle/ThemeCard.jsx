import styles from './ThemeCard.module.css';
import { useThemeDispatch } from '../../ThemeContext';
import { useTheme } from '../../ThemeContext';
import sunImage from '../../assets/images/icons/sun.svg';
import moonImage from '../../assets/images/icons/moon.svg';

const ThemeCard = function ({ setCurrentTheme }) {
  //після ре-рендеру цей стейт втрачає своє значення
  const dispatch = useThemeDispatch();

  const { theme } = useTheme();

  const btnClickHandler = function () {
    dispatch(theme === 'light' ? { type: 'dark' } : { type: 'light' });
    //set current theme for parent class to add different styles
    setCurrentTheme(theme === 'light' ? 'dark' : 'light');
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
