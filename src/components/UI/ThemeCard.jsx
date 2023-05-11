import styles from './ThemeCard.module.css';
import { useState } from 'react';
import { useThemeDispatch } from '../../ThemeContext';
import { useTheme } from '../../ThemeContext';
import sunImage from '../../assets/images/icons/sun.svg';
import moonImage from '../../assets/images/icons/moon.svg';

const ThemeCard = function ({ isStarterThemeIcon, setCurrentTheme }) {
  //після ре-рендеру цей стейт втрачає своє значення
  const dispatch = useThemeDispatch();

  const { theme } = useTheme();

  const btnClickHandler = function () {
    dispatch(theme === 'light' ? { type: 'dark' } : { type: 'light' });
    //set current theme for parent class to add different styles
    setCurrentTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={isStarterThemeIcon ? `${styles['card-starter']}` : `${styles['card-board']}`}>
      <button className={styles.button} onClick={btnClickHandler}>
        {theme === 'light' ? (
          <img src={moonImage} alt="Moon icon" />
        ) : (
          <img src={sunImage} alt="Sun icon" />
        )}
      </button>
    </div>
  );
};
export default ThemeCard;
