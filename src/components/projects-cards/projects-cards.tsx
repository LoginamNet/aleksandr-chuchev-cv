import ProjectsCard from './projects-card';
import CV_DATA from '../../constants/cv-data';

import './projects-cards.css';

function ProjectsCards() {
  return (
    <section className="section section-dark">
      <div className="wrapper projects-cards">
        <div className="projects-cards__box">
          {CV_DATA.projects.map((el, key) => (
            <ProjectsCard
              key={key}
              name={el.name}
              screenshot={el.screenshot}
              description={el.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsCards;
