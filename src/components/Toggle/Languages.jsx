import { useState } from 'react';
import i18n from '../../i18n';
import useLanguageHook from '../../hooks/useLanguageHook';
import { languages } from '../../config';
import styles from './Languages.module.css';

const Languages = function () {
  const [activeBtn, setActiveBtn] = useState(0);

  useLanguageHook(setActiveBtn, languages);

  const handleBtnClick = function (btn, i) {
    const selectedLanguage = btn;

    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('i18nextLng', selectedLanguage);

    setActiveBtn(i);
  };

  return (
    <div className={styles.container}>
      {languages.map((btn, i) => {
        return (
          <button
            onClick={() => handleBtnClick(btn, i)}
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
