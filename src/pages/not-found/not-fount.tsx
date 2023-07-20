import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './not-found.css';

function NotFound() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  const fullText = "Oops! You're lost..";

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 70);
    }
  }, [fullText, index, text]);

  return (
    <section className="section section__404">
      <div className="not-found__background">
        <img className="not-found__background-image" src="/404.svg" alt="404" />
      </div>
      <div className="wrapper cv-contacts">
        <div className="not-found__square"></div>
        <div className="not-found__main-box">
          <h1 className="small-text text-color-blue">
            {text}
            <span className="cursor">|</span>
          </h1>
          <Link to="/" className="not-found__button">
            Go Back
            <svg width="25" height="6" viewBox="0 0 25 6" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.2235 2.18487V0L24.9689 2.80899L21.2235 5.61798V3.43326H0V2.18487H21.2235Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
