//function for stop api call if it took too long
export const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
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
