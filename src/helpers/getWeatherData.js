import { TIMEOUT_SEC } from './../config';
import { timeout, convertTime } from './../helper';
import translateErrors from './translateErrors';
//Second AJAX CALL
const getWeatherData = async function (value, key) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${value.lat}&lon=${value.lon}&appid=${key}`;

    const resWeather = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);

    if (!resWeather.ok) {
      throw new Error(translateErrors('coordsIssue'));
    }

    const data = await resWeather.json();
    console.log(data);

    return {
      lat: value.lat.toFixed(4),
      lon: value.lon.toFixed(4),
      temp: Math.round(data.main.temp - 273),
      humid: data.main.humidity,
      wind: {
        windSpeed: data.wind.speed,
        windSide: data.wind.deg,
      },
      sunrise: convertTime(data.sys.sunrise),
      sunset: convertTime(data.sys.sunset),
      pressure: Math.round(data.main.pressure / 1.33),
      feelsLike: Math.round(data.main.feels_like - 273),
      description1: data.weather[0].main,
      description2: data.weather[0].description,
      cloudy: data.clouds.all,
      timezone: data.timezone,
      location: `${value.name}, ${data.sys.country}`,
    };
  } catch (error) {
    throw error;
  }
};

export default getWeatherData;
