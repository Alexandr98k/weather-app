import styles from './Footer.module.css';
const Footer = function () {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>Copyright © 2023</p>
      <p>Glory to Ukraine! Glory to Heroes!</p>
    </footer>
  );
};
export default Footer;
