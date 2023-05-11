const defineHeightMobileDisplay = function () {
  const isMobile = navigator.userAgentData.mobile;
  if (!isMobile) return;

  const setHeight = function () {
    const currentHeight = window.innerHeight;
    document.body.style.height = `${currentHeight}px`;
  };
  window.addEventListener('resize', setHeight);
  //on start we also check the height of body
  setHeight();
};

export default defineHeightMobileDisplay;
