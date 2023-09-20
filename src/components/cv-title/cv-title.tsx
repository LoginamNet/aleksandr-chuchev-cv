import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import Spline from '@splinetool/react-spline';
import CV_DATA from '../../constants/cv-data';

import ButtonRounded from '../buttons/button-rounded';
import ButtonDown from '../buttons/button-down';

import './cv-title.css';

function CVTitle() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const setIsPageLoaded = useOutletContext<React.Dispatch<React.SetStateAction<boolean>>>();

  const fullText = CV_DATA.name;

  const hanldeSplineLoad = () => {
    const spline = setTimeout(() => {
      setIsSplineLoaded(true);
      setIsPageLoaded(true);
      clearTimeout(spline);
    }, 2500);
  };

  const handleWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  const [windowSize, setWindowSize] = useState(handleWindowSize());

  useEffect(() => {
    if (index < fullText.length && isSplineLoaded) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 70);
    }
  }, [fullText, index, isSplineLoaded, text]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(handleWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [setIsPageLoaded]);

  return (
    <section className="section section-screen-height section-white">
      <div className="wrapper cv-title">
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
              onLoad={() => hanldeSplineLoad()}
            />
          </div>
        </div>
        <div className="cv-title__buttons">
          <ButtonRounded type="download" text="download cv" style="blue" />
          <ButtonRounded type="hash" text="contact me" style="default" hashTo="#contacts" />
        </div>
        <ButtonDown hashTo="#about" />
      </div>
    </section>
  );
}

export default CVTitle;
