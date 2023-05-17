import styles from './Board.module.css';
import TopBanner from '../TopBanner/TopBanner';
import MainBanner from '../MainBanner/MainBanner';
import AdditionalInfoBanner1 from '../AdditionalInfoBanners/AdditionalInfoBanner1';
import AdditionalInfoBanner2 from '../AdditionalInfoBanners/AdditionalInfoBanner2';
import isMovedToggle from '../../hooks/useMoveToggleComponent';

const Board = function ({
  setIsError,
  setErrorMessage,
  setIsLoaded,
  setFirstEnter,
  isError,
  setCurTheme,
}) {
  const moveToggle = isMovedToggle();
  return (
    <div className={styles.app}>
      <TopBanner
        setIsError={setIsError}
        setErrorMessage={setErrorMessage}
        setIsLoaded={setIsLoaded}
        isError={isError}
        setFirstEnter={setFirstEnter}
        isMovedToggle={moveToggle}
        setCurTheme={setCurTheme}
      />
      <MainBanner setCurTheme={setCurTheme} isMovedToggle={moveToggle} />
      <AdditionalInfoBanner1 />
      <AdditionalInfoBanner2 />
    </div>
  );
};

export default Board;
