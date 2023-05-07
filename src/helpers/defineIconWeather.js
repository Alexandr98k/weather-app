import clearDay from '../assets/images/weather-icons/clear-day.svg';
import clearNight from '../assets/images/weather-icons/clear-night.svg';
import clouds from '../assets/images/weather-icons/cloudy.svg';
import drizzle from '../assets/images/weather-icons/drizzle.svg';
import fogDay from '../assets/images/weather-icons/fog-day.svg';
import fogNight from '../assets/images/weather-icons/fog-night.svg';
import fog from '../assets/images/weather-icons/fog.svg';
import hazeDay from '../assets/images/weather-icons/haze-day.svg';
import hazeNight from '../assets/images/weather-icons/haze-night.svg';
import haze from '../assets/images/weather-icons/haze.svg';
import overcastDay from '../assets/images/weather-icons/overcast-day.svg';
import overcastNight from '../assets/images/weather-icons/overcast-night.svg';
import overcast from '../assets/images/weather-icons/overcast.svg';
import partlyCloudyDayDrizzle from '../assets/images/weather-icons/partly-cloudy-day-drizzle.svg';
import partlyCloudyDaySnow from '../assets/images/weather-icons/partly-cloudy-day-snow.svg';
import partlyCloudyDayRain from '../assets/images/weather-icons/partly-cloudy-day-rain.svg';
import partlyCloudyDay from '../assets/images/weather-icons/partly-cloudy-day.svg';
import partlyCloudyNightDrizzle from '../assets/images/weather-icons/partly-cloudy-night-drizzle.svg';
import partlyCloudyNightRain from '../assets/images/weather-icons/partly-cloudy-night-rain.svg';
import partlyCloudyNightSnow from '../assets/images/weather-icons/partly-cloudy-night-snow.svg';
import partlyCloudyNight from '../assets/images/weather-icons/partly-cloudy-night.svg';
import rain from '../assets/images/weather-icons/rain.svg';
import sleet from '../assets/images/weather-icons/sleet.svg';
import snow from '../assets/images/weather-icons/snow.svg';
import thunderstormsDayRain from '../assets/images/weather-icons/thunderstorms-day-rain.svg';
import thunderstormsNightRain from '../assets/images/weather-icons/thunderstorms-night-rain.svg';
import thunderstormsRain from '../assets/images/weather-icons/thunderstorms-rain.svg';
import tornado from '../assets/images/weather-icons/tornado.svg';

const getImagePath = function (day, cloudy, description1, description2) {
  //Clear sky
  if (description2 === 'clear sky') {
    if (day) {
      return clearDay;
    } else {
      return clearNight;
    }
  }

  //Cloudy days
  if (description2 === 'few clouds') {
    if (day) {
      return partlyCloudyDay;
    } else {
      return partlyCloudyNight;
    }
  }
  if (description2 === 'overcast clouds') {
    return overcast;
  }
  if (description2 === 'scattered clouds') {
    return clouds;
  }
  if (description2 === 'broken clouds') {
    if (day) {
      return overcastDay;
    } else {
      return overcastNight;
    }
  }

  //Drizzle
  if (description1 === 'Drizzle') {
    if (cloudy > 70) {
      return drizzle;
    }
    if (day) {
      return partlyCloudyDayDrizzle;
    }
    if (!day) {
      return partlyCloudyNightDrizzle;
    }
  }

  //Rain
  if (description1 === 'Rain') {
    if (cloudy > 70) {
      return rain;
    }
    if (day) {
      return partlyCloudyDayRain;
    }
    if (!day) {
      return partlyCloudyNightRain;
    }
  }

  //Thunder storm
  if (description1 === 'Thunderstorm') {
    if (cloudy > 70) {
      return thunderstormsRain;
    }
    if (day) {
      return thunderstormsDayRain;
    }
    if (!day) {
      return thunderstormsNightRain;
    }
  }

  //Snow
  if (description1 === 'Snow') {
    if (cloudy > 70) {
      return snow;
    }
    if (day) {
      return partlyCloudyDaySnow;
    }
    if (!day) {
      return partlyCloudyNightSnow;
    }

    if (description2 === 'sleet') {
      return sleet;
    }
  }

  //Atmosphere types
  const atmosphere1 = ['Mist', 'Fog', 'Smoke', 'Dust'];
  const atmosphere2 = ['Haze', 'Sand', 'Ash', 'Squall'];

  atmosphere1.forEach((el) => {
    if (el === description1) {
      if (cloudy > 70) {
        return fog;
      }
      if (day) {
        return fogDay;
      }
      if (!day) {
        return fogNight;
      }
    }
  });

  atmosphere2.forEach((el) => {
    if (el === description1) {
      if (cloudy > 70) {
        return haze;
      }
      if (day) {
        return hazeDay;
      }
      if (!day) {
        return hazeNight;
      }
    }
  });

  //Tornado
  if (description1 === 'Tornado') {
    return tornado;
  }
};

export default getImagePath;
