const defineHeightMobileDisplay = function () {
  const isMobile = navigator.userAgentData.mobile;
  if (!isMobile) return;

  const setHeight = function () {
    const currentHeight = window.innerHeight;
    document.querySelector('.app').style.minHeight = `${currentHeight}px`;
  };
  window.addEventListener('resize', setHeight);
  setHeight();
};

export default defineHeightMobileDisplay;
