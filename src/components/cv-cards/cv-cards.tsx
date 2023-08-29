import CVCard from './cv-card';
import ButtonRounded from '../buttons/button-rounded';
import CV_DATA from '../../constants/cv-data';

import './cv-cards.css';

function CVCards() {
  const RANDOM_PROJECTS = CV_DATA.projects.slice().sort(() => 0.5 - Math.random());

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
        <div className="cv-cards__buttons">
          <ButtonRounded type="link" text="view more" style="dark" linkTo="/projects" />
        </div>
      </div>
    </section>
  );
}

export default CVCards;
