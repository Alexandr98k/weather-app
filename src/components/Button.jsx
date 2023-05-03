import styles from './Button.module.css';
import buttonIcon from '../assets/icons/search-icon.png';

const Button = function () {
  return (
    <button className={styles['search-button']}>
      <img className={styles['search-icon']} src={buttonIcon} alt="Search icon" />
    </button>
  );
};

export default Button;
