import { Fragment, useRef, useState } from 'react';
import BackgroundBlur from './UI/BackgroundBlur';
import Modal from './UI/Modal';
import { CSSTransition } from 'react-transition-group';

const ModalScreen = function () {
  const nodeRef = useRef(null);
  return (
    <Fragment>
      <CSSTransition in={isAnimate} classNames="modal" timeout={5000}>
        <Modal />
      </CSSTransition>
      <BackgroundBlur />
    </Fragment>
  );
};
export default ModalScreen;
