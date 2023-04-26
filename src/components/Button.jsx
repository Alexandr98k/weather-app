import styles from './Button.module.css';
const Button = function ({ onHandleClick }) {
  return (
    <button className={styles['search-button']}>
      <img
        className={styles['search-icon']}
        src="../../images/icons/search-icon.png"
        alt="Search icon"
      />
    </button>
  );
};

export default Button;
