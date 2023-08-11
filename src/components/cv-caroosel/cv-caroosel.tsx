import Marquee from 'react-fast-marquee';
import SKILLS_DATA from '../../constants/skills-data';

import './cv-caroosel.css';

function Caroosel() {
  const RANDOM_SKILLS = SKILLS_DATA.slice().sort(() => 0.5 - Math.random());

  return (
    <section className="section section-dark">
      <Marquee className="cv-caroosel" speed={75} autoFill>
        {RANDOM_SKILLS.map((el, key) => (
          <div
            key={key}
            className="cv-caroosel__image"
            style={{ backgroundImage: `url(${el.icon})` }}
          />
        ))}
      </Marquee>
    </section>
  );
}

export default Caroosel;
