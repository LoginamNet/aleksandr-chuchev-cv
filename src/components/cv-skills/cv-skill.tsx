import { useRef, useState, useEffect } from 'react';

import './cv-skill.css';

type ComponentProps = {
  name: string;
};

function Skill(props: ComponentProps) {
  const skillRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);

  const handleScroll = () => {
    if (skillRef.current !== null) {
      setPosition(window.screen.height - skillRef.current.getBoundingClientRect().top);
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
    <div
      className={`cv-skill element-apear-on-scroll ${position <= 100 && 'element-not-scrolled'}`}
      ref={skillRef}
    >
      {props.name}
      <span className="cv-skill-text text-color-white">{props.name}</span>
      <span className="cv-skill-text cv-skill-text__hidden text-color-white">{props.name}</span>
    </div>
  );
}

export default Skill;
