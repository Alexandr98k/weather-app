import Starter from './UI/Starter';
import Board from './Board/Board';
import { Fragment } from 'react';

const Main = function ({ firstEnter, setIsLoaded, setFirstEnter, setCurTheme }) {
  return (
    <Fragment>
      {firstEnter ? (
        <Starter
          setIsLoaded={setIsLoaded}
          setFirstEnter={setFirstEnter}
          setCurTheme={setCurTheme}
        />
      ) : (
        <Board setIsLoaded={setIsLoaded} setFirstEnter={setFirstEnter} setCurTheme={setCurTheme} />
      )}
    </Fragment>
  );
};
export default Main;
