"use client";

import { useState, useEffect } from "react";

import layout from "../../layout.module.css";
import styles from "./projects-title.module.css";

function ProjectsTitle() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const fullText = "Works";

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 70);
    }
  }, [fullText, index, text]);

  return (
    <section
      className={`${layout.section} ${layout.section_no_bottom_padding} ${layout.section_dark}`}
    >
      <div className={`${layout.wrapper} ${styles.projects_title}`}>
        <h1 className={layout.text_color_peperment}>
          {text}
          <span className={layout.cursor}>|</span>
        </h1>
      </div>
    </section>
  );
}

export default ProjectsTitle;
