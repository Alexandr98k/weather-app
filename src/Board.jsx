import styles from './Board.module.css';
import TopBanner from './components/TopBanner/TopBanner';
import MainBanner from './components/MainBanner/MainBanner';
import AdditionalInfoBanner1 from './components/AdditionalInfoBanners/AdditionalInfoBanner1';
import AdditionalInfoBanner2 from './components/AdditionalInfoBanners/AdditionalInfoBanner2';

const Board = function ({
  setIsError,
  setErrorMessage,
  setIsLoaded,
  setFirstEnter,
  isError,
  isMovedToggle,
  setCurTheme,
}) {
  return (
    <div className={styles.app}>
      <TopBanner
        setIsError={setIsError}
        setErrorMessage={setErrorMessage}
        setIsLoaded={setIsLoaded}
        isError={isError}
        setFirstEnter={setFirstEnter}
        isMovedToggle={isMovedToggle}
        setCurTheme={setCurTheme}
      />
      <MainBanner setCurTheme={setCurTheme} isMovedToggle={isMovedToggle} />
      <AdditionalInfoBanner1 />
      <AdditionalInfoBanner2 />
    </div>
  );
};

export default Board;
