const calcApproximateTime = function (value) {
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

export default calcApproximateTime;
