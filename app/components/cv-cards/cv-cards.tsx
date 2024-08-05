"use client";

import { useRef, useState, useEffect } from "react";

import Card from "../card/card";
import ButtonRounded from "../buttons/button-rounded";

import layout from "../../layout.module.css";
import styles from "./cv-cards.module.css";

import CV_DATA from "../../constants/cv-data";

import { PROJECT } from "@/app/interfaces";

function CVCards() {
  const headerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const [positions, setPositions] = useState({ header: 0, button: 0 });
  const [RANDOM_PROJECTS, setRANDOM_PROJECTS] = useState<PROJECT[]>();

  const handleScroll = () => {
    if (headerRef.current !== null && buttonRef.current !== null) {
      setPositions({
        header:
          window.innerHeight - headerRef.current.getBoundingClientRect().top,
        button:
          window.innerHeight - buttonRef.current.getBoundingClientRect().top,
      });
    }
  };

  useEffect(() => {
    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    handleScroll();
  }, []);

  useEffect(() => {
    setRANDOM_PROJECTS(
      CV_DATA.projects.slice().sort(() => 0.5 - Math.random())
    );
  }, []);

  return (
    <section
      className={`${layout.section} ${layout.section_dark} ${layout.section_rounded_top} ${layout.section_shifted_top}`}
      id="projects"
    >
      <div className={`${layout.wrapper} ${styles.cv_cards}`}>
        <h2
          className={`${layout.text_color_white} ${
            layout.element_apear_on_scroll
          } ${positions.header <= 100 && layout.element_not_scrolled}`}
          ref={headerRef}
        >
          /works
        </h2>
        <div className={styles.cv_cards__box}>
          {RANDOM_PROJECTS &&
            RANDOM_PROJECTS.slice(0, 3).map((el, key) => (
              <Card
                key={key}
                type="cv"
                name={el.name}
                link={el.link}
                github={el.github}
                screenshot={el.screenshot}
                isScreenshootDark={el.isScreenshootDark}
                description={el.description}
                team={el.team}
                tech={el.tech}
                isFlexible={false}
              />
            ))}
        </div>
        <div
          className={`${styles.cv_cards__buttons} ${
            layout.element_apear_on_scroll
          } ${positions.button <= 20 && layout.element_not_scrolled}`}
          ref={buttonRef}
        >
          <ButtonRounded
            type="link"
            text="view more"
            style="dark"
            linkTo="/projects"
          />
        </div>
      </div>
    </section>
  );
}

export default CVCards;
