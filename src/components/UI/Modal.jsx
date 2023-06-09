import defineTypeError from '../../helpers/defineTypeError';
import styles from './Modal.module.css';
import { useErrorDispatch } from '../../context/ErrorContext';
import { useError } from '../../context/ErrorContext';
import { ReactComponent as DefaultErrorIcon } from '../../assets/images/error-icons/default-error.svg';
import { ReactComponent as FalseErrorIcon } from '../../assets/images/error-icons/false-error.svg';
import { ReactComponent as EmptyErrorIcon } from '../../assets/images/error-icons/empty-error.svg';

const Modal = function ({ nodeRef }) {
  const dispatch = useErrorDispatch();

  const errorData = useError();
  const typeError = defineTypeError(errorData.errorMessage);
  let errorIconComponent;
  if (typeError === 'defaultError') {
    errorIconComponent = <DefaultErrorIcon className={styles.image} />;
  }
  if (typeError === 'emptyError') {
    errorIconComponent = <EmptyErrorIcon className={styles.image} />;
  }
  if (typeError === 'falseError') {
    errorIconComponent = <FalseErrorIcon className={styles.image} />;
  }
  if (!typeError) {
    errorIconComponent = '';
  }

  return (
    <div ref={nodeRef} className={styles['my-modal']}>
      <button
        className={styles.button}
        onClick={() => {
          dispatch({ type: 'noError' });
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <p className={styles.text}>{errorData.errorMessage}</p>
      {errorIconComponent}
    </div>
  );
};
export default Modal;
