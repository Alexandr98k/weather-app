import { TIMEOUT_SEC } from './../config';
import { timeout } from './../helper';
//Second AJAX CALL
const getWeatherData = async function (value, key, cityTime) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${value.lat}&lon=${value.lon}&appid=${key}`;

    const resWeather = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);

    if (!resWeather.ok) {
      throw new Error('Problem with getting the weather by coordinates');
    }

    const data = await resWeather.json();

    return {
      temp: Math.round(data.main.temp - 273),
      humid: data.main.humidity,
      wind: data.wind.speed,
      description1: data.weather[0].main,
      description2: data.weather[0].description,
      cloudy: data.clouds.all,
      name: value.name,
      time: cityTime,
    };
  } catch (error) {
    throw error;
  }
};

export default getWeatherData;
