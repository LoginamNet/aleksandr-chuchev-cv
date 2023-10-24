import { useRef, useState, useEffect } from 'react';

import Card from '../card/card';
import ButtonRounded from '../buttons/button-rounded';
import CV_DATA from '../../constants/cv-data';

import './cv-cards.css';

const RANDOM_PROJECTS = CV_DATA.projects.slice().sort(() => 0.5 - Math.random());

function CVCards() {
  const headerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState({ header: 0, button: 0 });

  const handleScroll = () => {
    if (headerRef.current !== null && buttonRef.current !== null) {
      setPositions({
        header: window.screen.height - headerRef.current.getBoundingClientRect().top,
        button: window.screen.height - buttonRef.current.getBoundingClientRect().top,
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
    <section className="section section-dark section-rounded-top section-shifted-top" id="projects">
      <div className="wrapper cv-cards">
        <h2
          className={`text-color-white element-apear-on-scroll ${
            positions.header <= 100 && 'element-not-scrolled'
          }`}
          ref={headerRef}
        >
          /works
        </h2>
        <div className="cv-cards__box">
          {RANDOM_PROJECTS.slice(0, 3).map((el, key) => (
            <Card
              key={key}
              name={el.name}
              link={el.link}
              github={el.github}
              screenshot={el.screenshot}
              isScreenshootDark={el.isScreenshootDark}
              description={el.description}
              team={el.team}
              tech={el.tech}
            />
          ))}
        </div>
        <div
          className={`cv-cards__buttons element-apear-on-scroll ${
            positions.button <= 100 && 'element-not-scrolled'
          }`}
          ref={buttonRef}
        >
          <ButtonRounded type="link" text="view more" style="dark" linkTo="/projects" />
        </div>
      </div>
    </section>
  );
}

export default CVCards;
