import { Link } from 'react-router-dom';
import CVCard from './cv-card';
import PROJECTS_DATA from '../../constants/projects-data';

import './cv-cards.css';

function CVCards() {
  const RANDOM_PROJECTS = PROJECTS_DATA.slice().sort(() => 0.5 - Math.random());

  return (
    <section className="section section-dark" id="projects">
      <div className="wrapper cv-cards">
        <h2 className="text-color-white">/projects</h2>
        <div className="cv-cards__box">
          {RANDOM_PROJECTS.slice(0, 3).map((el, key) => (
            <CVCard
              key={key}
              screenshot={el.screenshot}
              name={el.name}
              description={el.description}
            />
          ))}
        </div>
        <Link
          to="/projects"
          className="button-rounded cv-cards__button"
          onClick={() => window.scrollTo(0, 0)}
        >
          get more
          <svg width="25" height="6" viewBox="0 0 25 6" fill="none">
            <path
              d="M21.2235 2.18487V0L24.9689 2.80899L21.2235 5.61798V3.43326H0V2.18487H21.2235Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default CVCards;
