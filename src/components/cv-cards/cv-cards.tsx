import Card from './cv-card';
import PROJECTS_DATA from '../../constants/projects-data';

import './cv-cards.css';

function Cards() {
  return (
    <section className="section section-dark">
      <div className="wrapper cv-cards">
        {PROJECTS_DATA.map((el, key) => (
          <Card key={key} screenshot={el.screenshot} description={el.description} />
        ))}
      </div>
    </section>
  );
}

export default Cards;
