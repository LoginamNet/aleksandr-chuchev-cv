import { useRef, useState, useEffect } from 'react';
import './cv-card.css';
import { HashLink } from 'react-router-hash-link';

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
    <div className="cv-card" ref={elementRef}>
      <div
        className={`cv-card__image ${
          position.y < position.height / 2 && 'cv-card__image-scrolled'
        }`}
        style={{ backgroundImage: `url(${props.screenshot})` }}
      ></div>
      <HashLink to={`/projects#${props.name}`} className="cv-card__link">
        <span className="cv-card__link-text text-color-white">View</span>
        <div className="cv-card__link-icon"></div>
      </HashLink>
      <span className="cv-card__name text-color-white">{props.name}</span>
      <span className="cv-card__description text-color-white">{props.description}</span>
    </div>
  );
}

export default CVCard;
