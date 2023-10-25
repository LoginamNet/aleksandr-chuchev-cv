import { useEffect, useState } from 'react';

import Preloader from '../../components/preloader/preloader';
import CVTitle from '../../components/cv-title/cv-title';
import About from '../../components/cv-about/cv-about';
import CVCards from '../../components/cv-cards/cv-cards';
import Skills from '../../components/cv-skills/cv-skills';
import CVContacts from '../../components/cv-contacts/cv-contacts';

function CVMain() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isPreloadesDisplayed, setIsPreloadesDisplayed] = useState(true);

  useEffect(() => {
    return () => {
      setIsPageLoaded(false);
    };
  }, [setIsPageLoaded]);

  return (
    <>
      {isPreloadesDisplayed && (
        <Preloader isPageLoaded={isPageLoaded} setIsPreloadesDisplayed={setIsPreloadesDisplayed} />
      )}
      <CVTitle setIsPageLoaded={setIsPageLoaded} />
      <About />
      <Skills />
      <CVCards />
      <CVContacts />
    </>
  );
}

export default CVMain;
