import { useState } from 'react';
import { languages } from '../../config';
import styles from './Languages.module.css';

const Languages = function () {
  const [activeBtn, setActiveBtn] = useState(0);

  return (
    <div className={styles.container}>
      {languages.map((btn, i) => {
        return (
          <button
            onClick={() => setActiveBtn(i)}
            className={`${styles.button} ${i === activeBtn ? `${styles.active}` : ''}`}
            key={btn}>
            {btn}
          </button>
        );
      })}
    </div>
  );
};
export default Languages;
