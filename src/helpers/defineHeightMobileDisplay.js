const defineHeightMobileDisplay = function () {
  const isMobile = navigator.userAgentData.mobile;
  console.log(isMobile);
  if (!isMobile) return;

  const setHeight = function () {
    const currentHeight = window.innerHeight;
    console.log(currentHeight);
    document.querySelector('.app').style.minHeight = `${currentHeight}px`;
  };
  window.addEventListener('resize', setHeight);
  // const setHeight = function () {
  //   document.querySelector('.app ').style.minHeight = `${window.innerHeight}px`;
  // };

  // let deviceWidth = window.matchMedia('(max-width: 1024px)');
  // console.log(deviceWidth);
  // if (deviceWidth.matches) {
  //   // set an event listener that detects when innerHeight changes:
  //   window.addEventListener('resize', setHeight);

  //   // call the function once to set initial height:
  //   setHeight();
  // }
  setHeight();
};

export default defineHeightMobileDisplay;

// const defineHeightMobileDisplay = function () {
//   const isMobile = navigator.userAgentData.mobile;
//   console.log(isMobile);
//   if (!isMobile) return;

//   const setHeight = function () {
//     const currentHeight = window.innerHeight;
//     console.log(currentHeight);
//     document.body.style.height = `${currentHeight}px`;
//   };
//   window.addEventListener('resize', setHeight);
