import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import translationEn from './locales/en/translation.json';
import translationUa from './locales/ua/translation.json';
import translationEsp from './locales/esp/translation.json';

i18n
  // i18next-http-backend
  // loads translations from your server
  // https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'ua',
    whitelist: ['ua', 'en', 'esp'],
    // saveMissing: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      order: ['localStorage', 'cookie'],
      caches: ['localStorage', 'cookie'],
    },

    resources: {
      en: {
        translations: translationEn,
      },
      ua: {
        translations: translationUa,
      },
      esp: {
        translations: translationEsp,
      },
    },
    ns: ['translations'],
    defaultNS: 'translations',
  });

export default i18n;
