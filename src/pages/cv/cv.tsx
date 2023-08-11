import CVTitle from '../../components/cv-title/cv-title';
import About from '../../components/cv-about/cv-about';
import CVCards from '../../components/cv-cards/cv-cards';
import Skills from '../../components/cv-skills/cv-skills';
import Caroosel from '../../components/cv-caroosel/cv-caroosel';
import Contacts from '../../components/cv-contacts/cv-contacts';
import ContactForm from '../../components/cv-contact-form/cv-contact-form';

function CVMain() {
  return (
    <>
      <CVTitle />
      <About />
      <CVCards />
      <Skills />
      <Caroosel />
      <Contacts />
      <ContactForm />
    </>
  );
}

export default CVMain;
