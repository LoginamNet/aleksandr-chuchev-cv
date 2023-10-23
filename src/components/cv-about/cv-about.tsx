import { useRef, useState, useEffect } from 'react';

import './cv-about.css';

function About() {
  const headerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState({ header: 0, text1: 0, text2: 0, text3: 0 });

  const handleScroll = () => {
    if (
      headerRef.current !== null &&
      text1Ref.current !== null &&
      text2Ref.current !== null &&
      text3Ref.current !== null
    ) {
      setPositions({
        header: window.screen.height - headerRef.current.getBoundingClientRect().top,
        text1: window.screen.height - text1Ref.current.getBoundingClientRect().top,
        text2: window.screen.height - text2Ref.current.getBoundingClientRect().top,
        text3: window.screen.height - text3Ref.current.getBoundingClientRect().top,
      });
    }
  };

  useEffect(() => {
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <section className="section section-blue section-rounded-top" id="about">
      <div className="wrapper cv-about">
        <h2
          className={`text-color-white element-apear-on-scroll ${
            positions.header <= 100 && 'element-not-scrolled'
          }`}
          ref={headerRef}
        >
          /about
        </h2>
        <div className="cv-about__text-box">
          <span
            className={`about-text text-color-white element-apear-on-scroll ${
              positions.text1 <= 100 && 'element-not-scrolled'
            }`}
            ref={text1Ref}
          >
            I always wanted to be a teacher, but the Russian education system quickly brought me
            down from heaven to earth. So I decided to work with the passion of my childhood -
            computers. I've been working as a system administrator for seven years, fixing computer
            hardware and dealing with networks. But one day I had to develop a website. Without
            having any experience.
          </span>
          <span
            className={`about-text text-color-white element-apear-on-scroll ${
              positions.text2 <= 100 && 'element-not-scrolled'
            }`}
            ref={text2Ref}
          >
            However, it was since then that I began to wonder how all this works outside of special
            services for creating websites.
          </span>
          <span
            className={`about-text text-color-white element-apear-on-scroll ${
              positions.text3 <= 100 && 'element-not-scrolled'
            }`}
            ref={text3Ref}
          >
            I also like computer games, volleyball and cycling.
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;
