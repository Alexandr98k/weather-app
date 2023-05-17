import translationEn from '../locales/en/translation.json';
import translationEsp from '../locales/esp/translation.json';
import translationUa from '../locales/ua/translation.json';

import getDate from './getDate';

const translateDate = function (timezone) {
  const lang = localStorage.getItem('i18nextLng');
  const dateObj = getDate(timezone);

  let dayWeek;
  let month;

  switch (lang) {
    case 'ua': {
      dayWeek = translationUa.daysOfWeek[dateObj.localDay.toString()];
      month = translationUa.months[dateObj.localMonth.toString()];
      break;
    }
    case 'en': {
      dayWeek = translationEn.daysOfWeek[dateObj.localDay.toString()];
      month = translationEn.months[dateObj.localMonth.toString()];
      break;
    }
    case 'esp': {
      dayWeek = translationEsp.daysOfWeek[dateObj.localDay.toString()];
      month = translationEsp.months[dateObj.localMonth.toString()];
      break;
    }
  }
  const date = dateObj.localDate;
  const year = dateObj.localYear;

  return {
    hours: dateObj.localHours,
    dateString: `${dayWeek}, ${month} ${date}, ${year}`,
  };
};
export default translateDate;
