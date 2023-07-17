import Title from '../../components/cv-title/cv-title';
import About from '../../components/cv-about/cv-about';
import Cards from '../../components/cv-cards/cv-cards';
import Skills from '../../components/cv-skills/cv-skills';
import Contacts from '../../components/cv-contacts/cv-contacts';
import ContactForm from '../../components/cv-contact-form/cv-contact-form';

function CVMain() {
  return (
    <>
      <Title />
      <About />
      <Cards />
      <Skills />
      <Contacts />
      <ContactForm />
    </>
  );
}

export default CVMain;
