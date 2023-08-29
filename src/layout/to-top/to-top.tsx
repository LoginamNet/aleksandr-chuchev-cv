import { useState, useEffect } from 'react';

import ButtonCircle from '../../components/buttons/button-circle';

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
    <div
      className={`to-top__button ${showButton && 'to-top__button-shown'}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <ButtonCircle bgColor="dark" borderColor="white" />
    </div>
  );
}

export default ToTop;
