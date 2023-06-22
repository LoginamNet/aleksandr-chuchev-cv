import './cv.css';

import Title from '../../components/cv-title/cv-title';
import About from '../../components/cv-about/cv-about';
import Cards from '../../components/cv-cards/cv-cards';
import Skills from '../../components/cv-skills/cv-skills';

function CVMain() {
  return (
    <div className="cv">
      <Title />
      <About />
      <Cards />
      <Skills />
    </div>
  );
}

export default CVMain;
