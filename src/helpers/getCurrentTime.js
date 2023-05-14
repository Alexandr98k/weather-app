import { secondsInOneHour } from '../config';

//get current time base on offset zone
const getCurrentTime = function (timezone) {
  const myTimeNow = new Date();
  //В об'єкті опцій передаємо часову зону, щоб не просто була інтернаціоналізація, а й відобразився час з цієї чосової зони
  const londonHours = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London',
    hour: 'numeric',
  }).format(myTimeNow);

  const differenceInHours = timezone / secondsInOneHour;

  let localCityTime;
  //якщо на схід від Лондона
  if (Math.abs(differenceInHours) === differenceInHours) {
    localCityTime = (+londonHours + differenceInHours) % 24;
  } else {
    localCityTime = londonHours - Math.abs(differenceInHours);
  }
  return localCityTime;

  // const timezoneOffset = 18000; // offset in seconds
  // const now = new Date();
  // console.log(now);
  // const currentTime = new Date(now.getTime() + timezoneOffset * 1000); // add offset in milliseconds

  // console.log(currentTime.toLocaleString());
};

export default getCurrentTime;
