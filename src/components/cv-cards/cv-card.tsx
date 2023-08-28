import { useRef, useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

import './cv-card.css';

type ComponentProps = {
  screenshot: string;
  name: string;
  description: string;
};

function CVCard(props: ComponentProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ y: 0, height: 0 });

  const handleScroll = () => {
    if (elementRef.current !== null) {
      setPosition({
        y: elementRef.current.getBoundingClientRect().top,
        height: elementRef.current.getBoundingClientRect().height,
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
    <HashLink to={`/projects#${props.name}`} className="cv-card">
      <div
        className={`cv-card__container ${
          position.y < position.height / 2 &&
          position.y > -position.height / 2 &&
          'cv-card__container-scrolled'
        }`}
        ref={elementRef}
      >
        <div
          className="cv-card__image"
          style={{ backgroundImage: `url(${props.screenshot})` }}
        ></div>
        <span className="cv-card__name text-color-white">{props.name}</span>
        <span className="cv-card__description text-color-white">
          {props.description.slice(0, 97).trim() + '...'}
        </span>
        <div className="button-circle"></div>
      </div>
    </HashLink>
  );
}

export default CVCard;
