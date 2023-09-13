import CVTitle from '../../components/cv-title/cv-title';
import About from '../../components/cv-about/cv-about';
import CVCards from '../../components/cv-cards/cv-cards';
import Skills from '../../components/cv-skills/cv-skills';
import CVContacts from '../../components/cv-contacts/cv-contacts';

function CVMain() {
  return (
    <>
      <CVTitle />
      <About />
      <CVCards />
      <Skills />
      <CVContacts />
    </>
  );
}

export default CVMain;
