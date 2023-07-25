import ProjectsCard from './projects-card';
import PROJECTS_DATA from '../../constants/projects-data';

import './projects-cards.css';

function ProjectsCards() {
  return (
    <section className="section section-dark">
      <div className="wrapper projects-cards">
        <div className="projects-cards__box">
          {PROJECTS_DATA.map((el, key) => (
            <ProjectsCard key={key} screenshot={el.screenshot} description={el.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsCards;
