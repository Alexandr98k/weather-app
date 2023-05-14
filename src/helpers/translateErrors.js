import translateEn from '../locales/en/translation.json';
import translateUa from '../locales/ua/translation.json';
import translateEsp from '../locales/esp/translation.json';

const translateErrors = function (errorType) {
  let errorMessage;
  const lang = localStorage.getItem('i18nextLng');
  switch (lang) {
    case 'ua':
      return (errorMessage = translateUa.errors[errorType]);
    case 'en':
      return (errorMessage = translateEn.errors[errorType]);
    case 'esp':
      return (errorMessage = translateEsp.errors[errorType]);
  }
};
export default translateErrors;
