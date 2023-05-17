const getDate = function (timeZoneOffset) {
  const myTimeNow = new Date();
  const londonDateTime = myTimeNow.toLocaleString('en-GB', { timeZone: 'Europe/London' });
  const londonDateTimeArr = londonDateTime.split(', ');
  const londonDate = londonDateTimeArr[0].split('/');
  const londonTime = londonDateTimeArr[1].split(':');

  const object = {
    year: +londonDate[2],
    month: londonDate[1].slice(1) - 1,
    date: +londonDate[0],
    hour: +londonTime[0] - 1,
  };
  const { year, month, date, hour } = object;

  const londonDateTimeObject = new Date(year, month, date, hour);

  const timeZoneTime = new Date(londonDateTimeObject.getTime() + timeZoneOffset * 1000);
  return {
    localDate: timeZoneTime.getDate(),
    localMonth: timeZoneTime.getMonth(),
    localYear: timeZoneTime.getFullYear(),
    localHours: timeZoneTime.getHours(),
    localDay: timeZoneTime.getDay(),
  };
};
export default getDate;
