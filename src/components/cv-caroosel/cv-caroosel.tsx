import Marquee from 'react-fast-marquee';
import CV_DATA from '../../constants/cv-data';

import './cv-caroosel.css';

function Caroosel() {
  const RANDOM_SKILLS = CV_DATA.skills.slice().sort(() => 0.5 - Math.random());

  return (
    <section className="section section-dark section-full-width">
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
