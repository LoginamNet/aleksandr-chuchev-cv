import { useRef, useState, useEffect } from "react";

import Skill from "./cv-skill";

import layout from "../../layout.module.css";
import styles from "./cv-skills.module.css";

import CV_DATA from "../../constants/cv-data";

function Skills() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState({ header: 0 });

  const handleScroll = () => {
    if (headerRef.current !== null) {
      setPositions({
        header:
          window.screen.height - headerRef.current.getBoundingClientRect().top,
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

  return (
    <section className={`${layout.section} ${layout.section_blue}`} id="skills">
      <div className={`${layout.wrapper} ${styles.cv_skills}`}>
        <h2
          className={`${layout.text_color_white} ${
            layout.element_apear_on_scroll
          } ${positions.header <= 100 && layout.element_not_scrolled}`}
          ref={headerRef}
        >
          /skills
        </h2>
        <div className={styles.cv_skills__skills_box}>
          {CV_DATA.skills.map(
            (el, key) => el.main && <Skill key={key} name={el.name} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;
