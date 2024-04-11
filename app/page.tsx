"use client";

import { useEffect, useState } from "react";
// import { RemoveScroll } from "react-remove-scroll";

import About from "./components/cv-about/cv-about";
import CVCards from "./components/cv-cards/cv-cards";
import CVContacts from "./components/cv-contacts/cv-contacts";
import Skills from "./components/cv-skills/cv-skills";
import CVTitle from "./components/cv-title/cv-title";
// import Preloader from "./components/preloader/preloader";

function CVMain() {
  // const [isPageLoaded, setIsPageLoaded] = useState(false);
  // const [isPreloadesDisplayed, setIsPreloadesDisplayed] = useState(true);

  // useEffect(() => {
  //   return () => {
  //     setIsPageLoaded(false);
  //   };
  // }, [setIsPageLoaded]);

  return (
    <>
      {/* <RemoveScroll enabled={isPreloadesDisplayed} removeScrollBar={true}>
        {isPreloadesDisplayed && (
          <Preloader
            isPageLoaded={isPageLoaded}
            setIsPreloadesDisplayed={setIsPreloadesDisplayed}
          />
        )}
      </RemoveScroll> */}
      <CVTitle />
      <About />
      <Skills />
      <CVCards />
      <CVContacts />
    </>
  );
}

export default CVMain;
