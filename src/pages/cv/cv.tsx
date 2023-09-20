import { useOutletContext } from 'react-router-dom';

import CVTitle from '../../components/cv-title/cv-title';
import About from '../../components/cv-about/cv-about';
import CVCards from '../../components/cv-cards/cv-cards';
import Skills from '../../components/cv-skills/cv-skills';
import CVContacts from '../../components/cv-contacts/cv-contacts';

function CVMain() {
  const setIsPageLoaded = useOutletContext<React.Dispatch<React.SetStateAction<boolean>>>();

  setIsPageLoaded(false);

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
