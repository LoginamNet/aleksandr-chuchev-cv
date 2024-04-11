import { useRef, useState, useEffect } from "react";

import layout from "../../layout.module.css";
import styles from "./cv-skill.module.css";

type ComponentProps = {
  name: string;
};

function Skill(props: ComponentProps) {
  const { name } = props;

  const skillRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);

  const handleScroll = () => {
    if (skillRef.current !== null) {
      setPosition(
        window.screen.height - skillRef.current.getBoundingClientRect().top
      );
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
    <div
      className={`${styles.cv_skill} ${layout.element_apear_on_scroll} ${
        position <= 100 && layout.element_not_scrolled
      }`}
      ref={skillRef}
    >
      {name}
      <span className={`${styles.cv_skill_text} ${layout.text_color_white}`}>
        {name}
      </span>
      <span
        className={`${styles.cv_skill_text} ${styles.cv_skill_text__hidden} ${layout.text_color_white}`}
      >
        {name}
      </span>
    </div>
  );
}

export default Skill;
