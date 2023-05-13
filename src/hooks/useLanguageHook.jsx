import { useEffect } from 'react';
const useLanguageHook = function (setActiveBtn, languages) {
  let index;

  let selectedLanguage;
  const languageValueInls = localStorage.getItem('i18nextLng');

  !languageValueInls && (selectedLanguage = 'ua');

  if (languageValueInls) {
    const from = languageValueInls.search('-') + 1;
    selectedLanguage = languageValueInls.substring(from, languageValueInls.length);
    index = languages.findIndex((lang) => lang === selectedLanguage);
  }

  useEffect(() => {
    setActiveBtn(index);
  }, []);
};

export default useLanguageHook;
