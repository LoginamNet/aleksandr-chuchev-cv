import { useRef, useState, useEffect } from 'react';

import ButtonCircle from '../buttons/button-circle';

import './projects-card.css';

type ComponentProps = {
  name: string;
  link: string;
  github: string;
  screenshot: string;
  description: string;
  team: boolean;
  tech: string[];
};

function ProjectsCard(props: ComponentProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, bottom: 0, height: 0 });

  const handleScroll = () => {
    if (elementRef.current !== null) {
      setPosition({
        top: elementRef.current.getBoundingClientRect().top,
        bottom: elementRef.current.getBoundingClientRect().bottom,
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
    <div
      className={`projects-card ${
        (position.top < position.height / 2 || position.bottom <= window.screen.height) &&
        'projects-card__scrolled'
      }`}
      ref={elementRef}
      id={props.name}
    >
      <div className="projects-card__box">
        <div
          className="projects-card__image-box"
          style={{ backgroundImage: `url(${props.screenshot})` }}
        >
          <div
            className="projects-card__image"
            style={{ backgroundImage: `url(${props.screenshot})` }}
          ></div>
          <div className="projects-card__tech-box">
            {props.team && <span className="projects-card__team text-color-white">TEAM</span>}
            {props.tech.map((el, key) => (
              <span key={key} className="projects-card__tech text-color-white">
                {el}
              </span>
            ))}
          </div>
        </div>
        <div className="projects-card__info-box">
          <h2 className="projects-card__name text-color-dark">{props.name}</h2>
          <span className="projects-card__description projects-card-text text-color-dark">
            {props.description}
          </span>
        </div>
        <div className="projects-card__buttons-hider">
          <div className="projects-card__buttons-box">
            <div className="projects-card__github-box">
              <a
                className={`projects-card__github projects-card-text text-color-dark ${
                  !props.github && 'non-displayed'
                }`}
                href={props.github}
              >
                View on GitHub
              </a>
            </div>
            <div
              className="projects-card__deploy-box"
              onClick={() => (window.location.href = props.link)}
            >
              <span className="projects-card-text text-color-dark">Visit site</span>
              <div className="projects-card__button">
                <ButtonCircle bgColor="none" borderColor="brown" arrowColor="dark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
