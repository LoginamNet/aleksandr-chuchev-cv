import { useRef, useState, useEffect } from 'react';

import Skill from './cv-skill';
import CV_DATA from '../../constants/cv-data';

import './cv-skills.css';

function Skills() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState({ header: 0 });

  const handleScroll = () => {
    if (headerRef.current !== null) {
      setPositions({
        header: window.screen.height - headerRef.current.getBoundingClientRect().top,
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
    <section className="section section-blue" id="skills">
      <div className="wrapper cv-skills">
        <h2
          className={`text-color-white element-apear-on-scroll ${
            positions.header <= 100 && 'element-not-scrolled'
          }`}
          ref={headerRef}
        >
          /skills
        </h2>
        <div className="cv-skills__skills-box">
          {CV_DATA.skills.map((el, key) => el.main && <Skill key={key} name={el.name} />)}
        </div>
      </div>
    </section>
  );
}

export default Skills;
