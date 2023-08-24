import { useState, useEffect } from 'react';

import './to-top.css';

function ToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  return (
    <button
      className={`to-top__button ${showButton && 'to-top__button-shown'}`}
      onClick={() => window.scrollTo(0, 0)}
    ></button>
  );
}

export default ToTop;
