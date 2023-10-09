import Card from '../card/card';
import ButtonRounded from '../buttons/button-rounded';
import CV_DATA from '../../constants/cv-data';

import './cv-cards.css';

function CVCards() {
  const RANDOM_PROJECTS = CV_DATA.projects.slice().sort(() => 0.5 - Math.random());

  return (
    <section className="section section-dark section-rounded-top section-shifted-top" id="projects">
      <div className="wrapper cv-cards">
        <h2 className="text-color-white">/works</h2>
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
        <div className="cv-cards__buttons">
          <ButtonRounded type="link" text="view more" style="dark" linkTo="/projects" />
        </div>
      </div>
    </section>
  );
}

export default CVCards;
