import About from "./components/cv-about/cv-about";
import CVCards from "./components/cv-cards/cv-cards";
import CVContacts from "./components/cv-contacts/cv-contacts";
import Skills from "./components/cv-skills/cv-skills";
import CVTitle from "./components/cv-title/cv-title";

function CVMain() {
  return (
    <>
      <CVTitle />
      <About />
      <Skills />
      <CVCards />
      <CVContacts />
    </>
  );
}

export default CVMain;
