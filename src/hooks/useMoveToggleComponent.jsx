import { useState, useEffect } from 'react';

const useMoveToggleComponent = function () {
  const [moveToTop, setMoveToTop] = useState(false);
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setDisplayWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (displayWidth <= 768) {
      setMoveToTop(true);
    } else {
      setMoveToTop(false);
    }
  }, [displayWidth]);

  return moveToTop;
};

export default useMoveToggleComponent;
