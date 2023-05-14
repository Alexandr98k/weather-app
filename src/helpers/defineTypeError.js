const defineTypeError = function (errMessage) {
  if (
    errMessage === 'Entered name of city not found!' ||
    errMessage === 'Введена назва міста не знайдена!' ||
    errMessage === 'Nombre ingresado de la ciudad no encontrado!'
  ) {
    return 'falseError';
  }
  if (
    errMessage ===
      'You are offline. Please make sure you have turned on your internet connection!' ||
    errMessage === `Ви оффлайн. Будь ласка впевніться, що ви увімкнули інтернет з'єднання!` ||
    errMessage ===
      'Estas desconectado. Por favor, asegúrese de haber activado su conexión a Internet!'
  ) {
    return null;
  }
  if (
    errMessage === `You didn't write anything!` ||
    errMessage === 'No escribiste nada!' ||
    errMessage === 'Ви нічого не написали!'
  ) {
    return 'emptyError';
  }
  return 'defaultError';
};
export default defineTypeError;
