import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import ProjectsTitle from '../../components/projects-title/projects-title';
import ProjectsCards from '../../components/projects-cards/projects-cards';
import ProjectsContacts from '../../components/projects-contacts/projects-contacts';

function Projects() {
  const setIsPageLoaded = useOutletContext<React.Dispatch<React.SetStateAction<boolean>>>();

  setIsPageLoaded(false);

  useEffect(() => {
    const preloader = setTimeout(() => {
      setIsPageLoaded(true);
    }, 2000);
    return () => clearTimeout(preloader);
  }, [setIsPageLoaded]);

  return (
    <>
      <ProjectsTitle />
      <ProjectsCards />
      <ProjectsContacts />
    </>
  );
}

export default Projects;
