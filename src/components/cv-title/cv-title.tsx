import { useState, useEffect } from 'react';

import Spline from '@splinetool/react-spline';
import CV_DATA from '../../constants/cv-data';

import ButtonRounded from '../buttons/button-rounded';
import ButtonDown from '../buttons/button-down';

import './cv-title.css';

type ComponentProps = { setIsPageLoaded: React.Dispatch<React.SetStateAction<boolean>> };

function CVTitle(props: ComponentProps) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  const fullText = CV_DATA.name;

  const hanldeSplineLoad = () => {
    const spline = setTimeout(() => {
      setIsSplineLoaded(true);
      props.setIsPageLoaded(true);
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
  }, []);

  return (
    <section className="section section-screen-height section-white">
      <div className="wrapper cv-title">
        <div className="cv-title__text-box">
          <span className="cv-title__text text-color-dark">Front-end Developer</span>
          <h1 className="small-text text-color-blue text-uppercased">
            {text}
            <span className="cursor">|</span>
          </h1>
          <div className="cv-title__keyboard">
            <Spline
              scene={
                windowSize.innerWidth > 519
                  ? 'https://draft.spline.design/Z2xJOZvwX9x2S4TF/scene.splinecode'
                  : 'https://draft.spline.design/3cw8UJh7xVPumvwb/scene.splinecode'
              }
              onLoad={() => hanldeSplineLoad()}
            />
          </div>
        </div>
        <div className="cv-title__buttons">
          <ButtonRounded type="download" text="download cv" style="blue" linkTo="/resume.pdf" />
          <ButtonRounded type="hash" text="contact me" style="default" hashTo="#contacts" />
        </div>
        <ButtonDown hashTo="#about" />
      </div>
    </section>
  );
}

export default CVTitle;
