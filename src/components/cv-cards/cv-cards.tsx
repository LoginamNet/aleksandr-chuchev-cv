import { Link } from 'react-router-dom';
import CVCard from './cv-card';
import PROJECTS_DATA from '../../constants/projects-data';

import './cv-cards.css';

function CVCards() {
  return (
    <section className="section section-dark" id="projects">
      <div className="wrapper cv-cards">
        <div className="cv-cards__box">
          {PROJECTS_DATA.map((el, key) => (
            <CVCard key={key} screenshot={el.screenshot} description={el.description} />
          ))}
        </div>
        <Link to="/projects" className="cv-cards__button" onClick={() => window.scrollTo(0, 0)}>
          get more of them
          <svg width="25" height="6" viewBox="0 0 25 6" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
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
