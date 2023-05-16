import translateEn from '../locales/en/translation.json';
import translateUa from '../locales/ua/translation.json';
import translateEsp from '../locales/esp/translation.json';

const translateWeatherDescription = function (descr1, descr2) {
  const lang = localStorage.getItem('i18nextLng');
  if (lang === 'ua') {
    if (descr2 === 'clear sky') {
      return translateUa.weatherDescription2.clearSky;
    }
    if (descr2 === 'few clouds') {
      return translateUa.weatherDescription2.fewClouds;
    }
    if (descr2 === 'overcast clouds') {
      return translateUa.weatherDescription2.overcastClouds;
    }
    if (descr2 === 'scattered clouds') {
      return translateUa.weatherDescription2.scatteredClouds;
    }
    if (descr2 === 'broken clouds') {
      return translateUa.weatherDescription2.brokenClouds;
    }
    if (descr1 === 'Drizzle') {
      return translateUa.weatherDescription1.drizzle;
    }
    if (descr1 === 'Rain') {
      return translateUa.weatherDescription1.rain;
    }
    if (descr1 === 'Thunderstorm') {
      return translateUa.weatherDescription1.thunderstorm;
    }
    if (descr1 === 'Snow') {
      return translateUa.weatherDescription1.snow;
    }
    if (descr1 === 'Tornado') {
      return translateUa.weatherDescription1.tornado;
    }
    if (descr1 === 'Mist') {
      return translateUa.weatherDescription1.mist;
    }
    if (descr1 === 'Fog') {
      return translateUa.weatherDescription1.fog;
    }
    if (descr1 === 'Smoke') {
      return translateUa.weatherDescription1.smoke;
    }
    if (descr1 === 'Dust') {
      return translateUa.weatherDescription1.dust;
    }
    if (descr1 === 'Haze') {
      return translateUa.weatherDescription1.haze;
    }
    if (descr1 === 'Sand') {
      return translateUa.weatherDescription1.sand;
    }
    if (descr1 === 'Ash') {
      return translateUa.weatherDescription1.ash;
    }
    if (descr1 === 'Squall') {
      return translateUa.weatherDescription1.squall;
    }
  }
  if (lang === 'en') {
    if (descr2 === 'clear sky') {
      return translateEn.weatherDescription2.clearSky;
    }
    if (descr2 === 'few clouds') {
      return translateEn.weatherDescription2.fewClouds;
    }
    if (descr2 === 'overcast clouds') {
      return translateEn.weatherDescription2.overcastClouds;
    }
    if (descr2 === 'scattered clouds') {
      return translateEn.weatherDescription2.scatteredClouds;
    }
    if (descr2 === 'broken clouds') {
      return translateEn.weatherDescription2.brokenClouds;
    }
    if (descr1 === 'Drizzle') {
      return translateEn.weatherDescription1.drizzle;
    }
    if (descr1 === 'Rain') {
      return translateEn.weatherDescription1.rain;
    }
    if (descr1 === 'Thunderstorm') {
      return translateEn.weatherDescription1.thunderstorm;
    }
    if (descr1 === 'Snow') {
      return translateEn.weatherDescription1.snow;
    }
    if (descr1 === 'Tornado') {
      return translateEn.weatherDescription1.tornado;
    }
    if (descr1 === 'Mist') {
      return translateEn.weatherDescription1.mist;
    }
    if (descr1 === 'Fog') {
      return translateEn.weatherDescription1.fog;
    }
    if (descr1 === 'Smoke') {
      return translateEn.weatherDescription1.smoke;
    }
    if (descr1 === 'Dust') {
      return translateEn.weatherDescription1.dust;
    }
    if (descr1 === 'Haze') {
      return translateEn.weatherDescription1.haze;
    }
    if (descr1 === 'Sand') {
      return translateEn.weatherDescription1.sand;
    }
    if (descr1 === 'Ash') {
      return translateEn.weatherDescription1.ash;
    }
    if (descr1 === 'Squall') {
      return translateEn.weatherDescription1.squall;
    }
  }
  if (lang === 'esp') {
    if (descr2 === 'clear sky') {
      return translateEsp.weatherDescription2.clearSky;
    }
    if (descr2 === 'few clouds') {
      return translateEsp.weatherDescription2.fewClouds;
    }
    if (descr2 === 'overcast clouds') {
      return translateEsp.weatherDescription2.overcastClouds;
    }
    if (descr2 === 'scattered clouds') {
      return translateEsp.weatherDescription2.scatteredClouds;
    }
    if (descr2 === 'broken clouds') {
      return translateEsp.weatherDescription2.brokenClouds;
    }
    if (descr1 === 'Drizzle') {
      return translateEsp.weatherDescription1.drizzle;
    }
    if (descr1 === 'Rain') {
      return translateEsp.weatherDescription1.rain;
    }
    if (descr1 === 'Thunderstorm') {
      return translateEsp.weatherDescription1.thunderstorm;
    }
    if (descr1 === 'Snow') {
      return translateEsp.weatherDescription1.snow;
    }
    if (descr1 === 'Tornado') {
      return translateEsp.weatherDescription1.tornado;
    }
    if (descr1 === 'Mist') {
      return translateEsp.weatherDescription1.mist;
    }
    if (descr1 === 'Fog') {
      return translateEsp.weatherDescription1.fog;
    }
    if (descr1 === 'Smoke') {
      return translateEsp.weatherDescription1.smoke;
    }
    if (descr1 === 'Dust') {
      return translateEsp.weatherDescription1.dust;
    }
    if (descr1 === 'Haze') {
      return translateEsp.weatherDescription1.haze;
    }
    if (descr1 === 'Sand') {
      return translateEsp.weatherDescription1.sand;
    }
    if (descr1 === 'Ash') {
      return translateEsp.weatherDescription1.ash;
    }
    if (descr1 === 'Squall') {
      return translateEsp.weatherDescription1.squall;
    }
  }
};
export default translateWeatherDescription;
