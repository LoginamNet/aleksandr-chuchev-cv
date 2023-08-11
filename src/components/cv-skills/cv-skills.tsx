import Skill from './cv-skill';
import SKILLS_DATA from '../../constants/skills-data';

import './cv-skills.css';

function Skills() {
  return (
    <section className="section section-dark" id="skills">
      <div className="wrapper cv-skills">
        <div className="cv-skills__section">
          <h2 className="text-color-white">/skills</h2>
          <div className="cv-skills__skills-box">
            {SKILLS_DATA.map((el, key) => el.main && <Skill key={key} name={el.name} />)}
          </div>
        </div>
        <div className="cv-skills__section">
          <h2 className="text-color-white">/languages</h2>
          <div className="cv-skills__languages-box">
            <span className="cv-skills__language-text text-color-white">russian — native</span>
            <span className="cv-skills__language-text text-color-white">english</span>
            <span className="cv-skills__language-text text-color-white">spanish</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
