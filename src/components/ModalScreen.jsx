import { Fragment } from 'react';
import BackgroundBlur from './UI/BackgroundBlur';
import Modal from './UI/Modal';
const ModalScreen = function ({ errorMessage, setIsError }) {
  return (
    <Fragment>
      <Modal errorMessage={errorMessage} setIsError={setIsError} />
      <BackgroundBlur setIsError={setIsError} />
    </Fragment>
  );
};
export default ModalScreen;
