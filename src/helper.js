import { TIMEOUT_SEC } from './config';

//function for stop api call if it took too long
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};

//get coords and name of city
export const getCityData = async function (value, key) {
  try {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${key}`;

    const resCoords = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);

    if (!resCoords.ok) {
      throw new Error('Problem with getting coordinates by name of city');
    }

    const data = await resCoords.json();

    if (data.length === 0) {
      throw new Error('Entered name of city not found!');
    }

    return {
      lat: data[0].lat,
      lon: data[0].lon,
      name: data[0].name,
    };
  } catch (error) {
    //throw error from low async function to the parent async function
    throw error;
  }
};

//Second AJAX CALL
export const getWeatherData = async function (value, key, cityTime) {
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

//Check if there is an internet connection when from is submitting
export const checkInternetConnection = function () {
  if (!navigator.onLine) {
    throw new Error(
      'You are offline. Please make sure you have turned on your internet connection!',
    );
  }
};

//check if form is not empty when form is submitting
export const checkIfInputNotEmpty = function (inputValue) {
  if (inputValue === '') {
    throw new Error(`You didn't write anything!`);
    return;
  }
};

export const calcApproximateTime = function (value) {
  const hours = 24;
  const degrees = 360;
  const quantityOfDegreesPerHour = degrees / hours;
  const myTimeNow = new Date();
  //В об'єкті опцій передаємо часову зону, щоб не просто була інтернаціоналізація, а й відобразився час з цієї чосової зони
  const londonHours = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London',
    hour: 'numeric',
  }).format(myTimeNow);

  const differenceOfHours = Math.round(value.lon / quantityOfDegreesPerHour);

  let localCityTime;
  //якщо на схід від Лондона
  if (Math.abs(differenceOfHours) === differenceOfHours) {
    localCityTime = (+londonHours + differenceOfHours) % 24;
  } else {
    localCityTime = londonHours - Math.abs(differenceOfHours);
  }
  return localCityTime;
};
