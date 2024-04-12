"use client";

import { useState, useEffect } from "react";

import Spline from "@splinetool/react-spline";

import ButtonRounded from "../buttons/button-rounded";
import ButtonDown from "../buttons/button-down";

import layout from "../../layout.module.css";
import styles from "./cv-title.module.css";

import CV_DATA from "../../constants/cv-data";

function CVTitle() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const fullText = CV_DATA.name;

  const hanldeSplineLoad = () => {
    setIsSplineLoaded(true);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (index < fullText.length && isSplineLoaded) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 70);
    }
  }, [fullText, index, isSplineLoaded, text]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <section
      className={`${layout.section} ${layout.section_screen_height} ${layout.section_white}`}
    >
      <div className={`${layout.wrapper} ${styles.cv_title}`}>
        <div className={styles.cv_title__text_box}>
          <span
            className={`${styles.cv_title__text} ${layout.text_color_dark}`}
          >
            Front-end Developer
          </span>
          <h1 className={`${layout.text_color_blue} ${layout.text_uppercased}`}>
            {text}
            <span className={layout.cursor}>|</span>
          </h1>
          <div className={styles.cv_title__keyboard}>
            <Spline
              scene={
                windowWidth > 519
                  ? "https://draft.spline.design/jj4o5rHnn1JEs5ex/scene.splinecode"
                  : "https://draft.spline.design/i07PYLgXAweR1zU4/scene.splinecode"
              }
              onLoad={() => hanldeSplineLoad()}
            />
          </div>
        </div>
        <div className={styles.cv_title__buttons}>
          <ButtonRounded
            type="download"
            text="download cv"
            style="blue"
            linkTo="/resume.pdf"
          />
          <ButtonRounded
            type="hash"
            text="contact me"
            style="default"
            hashTo="#contacts"
          />
        </div>
        <ButtonDown hashTo="#about" />
      </div>
    </section>
  );
}

export default CVTitle;
