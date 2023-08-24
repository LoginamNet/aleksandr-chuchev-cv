import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import Spline from '@splinetool/react-spline';

import './cv-title.css';

function CVTitle() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  // const [offset, setOffset] = useState(0);

  const fullText = 'Aleksandr Chuchev';

  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 70);
    }
  }, [fullText, index, text]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  // useEffect(() => {
  //   const onScroll = () => setOffset(window.scrollY);

  //   window.removeEventListener('scroll', onScroll);
  //   window.addEventListener('scroll', onScroll, { passive: true });
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, []);

  return (
    <section className="section section-white">
      <div className="wrapper cv-title">
        {/* <div className="cv-title__rotate" style={{ transform: `rotate(${offset / 15}deg)` }}>Spline scene="https://prod.spline.design/s-ZQdBXEDe3PTyfs/scene.splinecode" /></div> */}
        <div className="cv-title__text-box">
          <span className="cv-title__text text-color-dark">Front-end Developer</span>
          <h1 className="small-text text-color-blue">
            {text}
            <span className="cursor">|</span>
          </h1>
          <div className="cv-title__keyboard">
            <Spline
              scene={
                windowSize.innerWidth > 519
                  ? 'https://prod.spline.design/s-ZQdBXEDe3PTyfs/scene.splinecode'
                  : 'https://prod.spline.design/M1h3LZQ2nic-WZRX/scene.splinecode'
              }
            />
          </div>
        </div>
        <div className="cv-title__buttons">
          <button className="button-rounded cv-title__download">download cv</button>
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
      </div>
    </section>
  );
}

export default CVTitle;
