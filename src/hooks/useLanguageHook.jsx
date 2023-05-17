import { useEffect } from 'react';
const useLanguageHook = function (setActiveBtn, languages) {
  let index;
  let selectedLang;

  const langValInls = localStorage.getItem('i18nextLng');
  if (!langValInls) selectedLang = 'ua';

  if (langValInls) {
    selectedLang = langValInls;
    index = languages.findIndex((lang) => lang === selectedLang);
  }

  useEffect(() => {
    setActiveBtn(index);
  }, []);
};

export default useLanguageHook;
