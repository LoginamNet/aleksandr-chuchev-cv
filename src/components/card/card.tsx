import { useRef, useState, useEffect } from 'react';

import ButtonCircle from '../buttons/button-circle';

import './card.css';

type ComponentProps = {
  name: string;
  link: string;
  github: string;
  screenshot: string;
  isScreenshootDark: boolean;
  description: string;
  team: boolean;
  tech: string[];
};

function Card(props: ComponentProps) {
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
      className={`card element-apear-on-scroll ${
        (position.top < position.height / 2 || position.bottom <= window.screen.height) &&
        'card__scrolled'
      } ${window.screen.height - position.top <= 100 && 'element-not-scrolled'}`}
      onClick={() => (window.location.href = props.link)}
      ref={elementRef}
      id={props.name}
    >
      <div className="card__box">
        <div className="card__image-box" style={{ backgroundImage: `url(${props.screenshot})` }}>
          <div
            className="card__image"
            style={{ backgroundImage: `url(${props.screenshot})` }}
          ></div>
          <div className="card__tech-box">
            {props.team && <span className="card__team text-color-white">TEAM</span>}
            {props.tech.map((el, key) => (
              <span
                key={key}
                className={`card__tech ${
                  props.isScreenshootDark
                    ? 'card__tech-white text-color-dark'
                    : 'card__tech-dark text-color-white'
                }`}
              >
                {el}
              </span>
            ))}
          </div>
        </div>
        <div className="card__info-box">
          <h2 className="card__name text-color-dark">{props.name}</h2>
          <span className="card__description card-text text-color-dark">{props.description}</span>
        </div>
        <div className="card__buttons-hider">
          <div className="card__buttons-box">
            <div className="card__github-box">
              <a
                className={`card__github card-text text-color-dark ${
                  !props.github && 'non-displayed'
                }`}
                href={props.github}
              >
                View on GitHub
              </a>
            </div>
            <div className="card__deploy-box">
              <span className="card-text text-color-dark">Visit site</span>
              <div className="card__button">
                <ButtonCircle bgColor="none" borderColor="brown" arrowColor="dark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
