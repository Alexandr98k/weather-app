import styles from './Card.module.css';

const Card = function ({ children }) {
  return <div className={styles['card-item']}>{children}</div>;
};
export default Card;
