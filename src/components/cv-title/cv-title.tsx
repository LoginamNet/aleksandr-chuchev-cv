import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

import './cv-title.css';

function CVTitle() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  const fullText = 'Aleksandr Chuchev';

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 70);
    }
  }, [fullText, index, text]);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="section section-white">
      <div className="wrapper cv-title">
        <div className="cv-title__rotate" style={{ transform: `rotate(${offset / 15}deg)` }}></div>
        <div className="cv-title__text-box">
          <span className="cv-title__text text-color-dark">Front-end Developer</span>
          <h1 className="small-text text-color-blue">
            {text}
            <span className="cursor">|</span>
          </h1>
        </div>
        <HashLink to="#contacts" className="button-rounded cv-title__button">
          contact me
          <svg width="25" height="6" viewBox="0 0 25 6" fill="none">
            <path
              d="M21.2235 2.18487V0L24.9689 2.80899L21.2235 5.61798V3.43326H0V2.18487H21.2235Z"
              fill="currentColor"
            />
          </svg>
        </HashLink>
      </div>
    </section>
  );
}

export default CVTitle;
