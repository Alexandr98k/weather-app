import translateErrors from './helpers/translateErrors';

//function for stop api call if it took too long
export const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error(translateErrors('requestTookTooLong')));
    }, sec * 1000);
  });
};

//Check if there is an internet connection when from is submitting
export const checkInternetConnection = function () {
  if (!navigator.onLine) {
    throw new Error(translateErrors('offline'));
  }
};

//check if form is not empty when form is submitting
export const checkInputEmpty = function (inputValue) {
  if (inputValue === '') {
    throw new Error(translateErrors('emptyInput'));
    return;
  }
};

export const convertTime = function (timeStamp) {
  let hours = new Date(timeStamp * 1000).getHours();
  let minutes = new Date(timeStamp * 1000).getMinutes();
  if (hours.toString().length === 1) {
    hours = `0${hours}`;
  }
  if (minutes.toString().length === 1) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
};
