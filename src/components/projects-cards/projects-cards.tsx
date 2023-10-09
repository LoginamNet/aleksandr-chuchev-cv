import Card from '../card/card';
import CV_DATA from '../../constants/cv-data';

import './projects-cards.css';

function ProjectsCards() {
  return (
    <section className="section section-dark" id="projects">
      <div className="wrapper projects-cards">
        <div className="projects-cards__box-static">
          <div className="projects-cards__box">
            {CV_DATA.projects.slice(0, CV_DATA.projects.length / 2).map((el, key) => (
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
          <div className="projects-cards__box">
            {CV_DATA.projects.slice(CV_DATA.projects.length / 2).map((el, key) => (
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
        </div>
        <div className="projects-cards__box-dynamic">
          <div className="projects-cards__box">
            {CV_DATA.projects.slice(0, CV_DATA.projects.length / 2).map((el, key) => (
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
          <div className="projects-cards__box">
            {CV_DATA.projects.slice(CV_DATA.projects.length / 2).map((el, key) => (
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
        </div>
      </div>
    </section>
  );
}

export default ProjectsCards;
