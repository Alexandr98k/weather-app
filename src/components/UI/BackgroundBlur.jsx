import styles from './BackgroundBlur.module.css';
import { useErrorDispatch } from '../../context/ErrorContext';

const BackgroundBlur = function () {
  const dispatch = useErrorDispatch();
  return <div className={styles.backdrop} onClick={() => dispatch({ type: 'noError' })}></div>;
};

export default BackgroundBlur;
