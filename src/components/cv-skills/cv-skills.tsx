import Skill from './cv-skill';
import SKILLS_DATA from '../../constants/skills-data';

import './cv-skills.css';

function Skills() {
  return (
    <section className="section section-dark" id="skills">
      <div className="wrapper cv-skills">
        <h3 className="text-color-peperment">Powered by Potent Skills</h3>
        {SKILLS_DATA.map((el, key) => (
          <Skill key={key} name={el.name} description={el.description} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
