import styles from './Board.module.css';
import TopBanner from './components/TopBanner/TopBanner';
import MainInfoBanner from './components/MainBanner/MainBanner';
import AdditionalInfoBanner1 from './components/AdditionalInfoBanners/AdditionalInfoBanner1';
import AdditionalInfoBanner2 from './components/AdditionalInfoBanners/AdditionalInfoBanner2';

const Board = function ({
  setIsError,
  setErrorMessage,
  setIsLoaded,
  setFirstEnter,
  setCurrentTheme,
  isError,
}) {
  return (
    <div className={styles.app}>
      <TopBanner
        setIsError={setIsError}
        setErrorMessage={setErrorMessage}
        setIsLoaded={setIsLoaded}
        isError={isError}
        setFirstEnter={setFirstEnter}
      />
      <MainInfoBanner setCurrentTheme={setCurrentTheme} />
      <AdditionalInfoBanner1 />
      <AdditionalInfoBanner2 />
    </div>
  );
};

export default Board;
