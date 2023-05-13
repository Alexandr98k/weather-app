import { useEffect } from 'react';

const useThemeHook = function (setCurTheme, dispatch) {
  let selectedTheme;
  const themeInLs = localStorage.getItem('theme');
  !themeInLs && (selectedTheme = 'light');

  if (themeInLs) {
    useEffect(() => {
      setCurTheme(themeInLs);
      dispatch({ type: themeInLs === 'light' ? 'light' : 'dark' });
    }, []);
  }
};
export default useThemeHook;
