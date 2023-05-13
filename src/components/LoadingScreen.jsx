import Loader from './UI/Loader';
import BackgroundBlur from './UI/BackgroundBlur';
import { Fragment } from 'react';

const LoadingScreen = function () {
  return (
    <Fragment>
      <Loader />
      <BackgroundBlur />
    </Fragment>
  );
};

export default LoadingScreen;
