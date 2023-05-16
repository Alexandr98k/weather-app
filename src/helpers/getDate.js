const getDate = function (timezone) {
  const myTimeNow = new Date();
  //В об'єкті опцій передаємо часову зону, щоб не просто була інтернаціоналізація, а й відобразився час з цієї чосової зони
  const londonDate = new Intl.DateTimeFormat({
    timeZone: 'Europe/London',
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(myTimeNow);

  console.log(londonDate);
  return londonDate;

  // const timezoneOffset = timezone; // offset in seconds
  // const now = new Date();
  // const currentTime = new Date(now.getTime() + timezoneOffset * 1000); // add offset in milliseconds

  // console.log(currentTime.toLocaleString()); // outputs the current date and time in local time zone with format "MM/DD/YYYY, hh:mm:ss AM/PM"
};
export default getDate;
