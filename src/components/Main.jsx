import Starter from './UI/Starter';
import Board from './Board/Board';
import { Fragment } from 'react';

const Main = function ({
  firstEnter,
  isMovedToggle,
  isError,
  setIsError,
  setErrorMessage,
  setIsLoaded,
  setFirstEnter,
  setCurTheme,
}) {
  return (
    <Fragment>
      {firstEnter ? (
        <Starter
          setIsError={setIsError}
          setErrorMessage={setErrorMessage}
          setIsLoaded={setIsLoaded}
          setFirstEnter={setFirstEnter}
          isError={isError}
          setCurTheme={setCurTheme}
        />
      ) : (
        <Board
          isMovedToggle={isMovedToggle}
          isError={isError}
          setIsError={setIsError}
          setErrorMessage={setErrorMessage}
          setIsLoaded={setIsLoaded}
          setFirstEnter={setFirstEnter}
          setCurTheme={setCurTheme}
        />
      )}
    </Fragment>
  );
};
export default Main;