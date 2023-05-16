//get current time base on offset zone
const getCurrentTime = function (timezone) {
  const myTimeNow = new Date();
  const londonTime = myTimeNow.toLocaleString('en-GB', { timeZone: 'Europe/London' });

  // console.log(new Date(londonTime));
};

export default getCurrentTime;
