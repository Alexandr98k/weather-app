const defineHeightMobileDisplay = function () {
  const setHeight = function () {
    document.querySelector('.app ').style.minHeight = `${window.innerHeight}px`;
  };

  let deviceWidth = window.matchMedia('(max-width: 1024px)');
  console.log(deviceWidth);
  if (deviceWidth.matches) {
    // set an event listener that detects when innerHeight changes:
    window.addEventListener('resize', setHeight);

    // call the function once to set initial height:
    setHeight();
  }

  // window.addEventListener('resize', setHeight);
  // //on start we also check the height of body
  // setHeight();
};

export default defineHeightMobileDisplay;
