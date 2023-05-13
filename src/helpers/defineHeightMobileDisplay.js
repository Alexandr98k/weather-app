const defineHeightMobileDisplay = function () {
  const isMobile = navigator.userAgentData.mobile;
  if (!isMobile) return;

  const setHeight = function () {
    document.querySelector('.app ').style.height = `${window.innerHeight}px`;
  };
  window.addEventListener('resize', setHeight);
  //on start we also check the height of body
  setHeight();
};

export default defineHeightMobileDisplay;

// // define a function that sets min-height of my-element to window.innerHeight:

// const setHeight = () => {
//   document.getElementById('my-element').style.minHeight = window.innerHeight + 'px';
// };

// // define mobile screen size:

// let deviceWidth = window.matchMedia('(max-width: 1024px)');

// if (deviceWidth.matches) {
//   // set an event listener that detects when innerHeight changes:

//   window.addEventListener('resize', setHeight);

//   // call the function once to set initial height:

//   setHeight();
// }
