"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

import layout from "../../layout.module.css";
import styles from "./cv-about.module.css";

function About() {
  const headerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const text4Ref = useRef<HTMLDivElement>(null);
  const text5Ref = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState({
    header: 0,
    text1: 0,
    text2: 0,
    text3: 0,
    text4: 0,
    text5: 0,
  });

  const handleScroll = () => {
    if (
      headerRef.current !== null &&
      text1Ref.current !== null &&
      text2Ref.current !== null &&
      text3Ref.current !== null &&
      text4Ref.current !== null &&
      text5Ref.current !== null
    ) {
      setPositions({
        header:
          window.innerHeight - headerRef.current.getBoundingClientRect().top,
        text1:
          window.innerHeight - text1Ref.current.getBoundingClientRect().top,
        text2:
          window.innerHeight - text2Ref.current.getBoundingClientRect().top,
        text3:
          window.innerHeight - text3Ref.current.getBoundingClientRect().top,
        text4:
          window.innerHeight - text4Ref.current.getBoundingClientRect().top,
        text5:
          window.innerHeight - text5Ref.current.getBoundingClientRect().top,
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
    <section
      className={`${layout.section} ${layout.section_blue} ${layout.section_no_bottom_padding} ${layout.section_rounded_top}`}
      id="about"
    >
      <div className={`${layout.wrapper} ${styles.cv_about}`}>
        <h2
          className={`${layout.text_color_white} ${
            layout.element_apear_on_scroll
          } ${positions.header <= 100 && layout.element_not_scrolled}`}
          ref={headerRef}
        >
          /about
        </h2>
        <div className={styles.cv_about__text_box}>
          <span
            className={`${styles.about_text} ${layout.text_color_white} ${
              layout.element_apear_on_scroll
            } ${positions.text1 <= 100 && layout.element_not_scrolled}`}
            ref={text1Ref}
          >
            Hello! 👋 My name is Aleksandr, and I’m a <b>Front-end Developer</b>{" "}
            with experience in teaching physics and system administration.
          </span>
          <span
            className={`${styles.about_text} ${layout.text_color_white} ${
              layout.element_apear_on_scroll
            } ${positions.text2 <= 100 && layout.element_not_scrolled}`}
            ref={text2Ref}
          >
            As a teacher, I have developed strong communication skills,
            reinforced my resilience to stress, and honed my ability to manage
            time effectively.
          </span>
          <span
            className={`${styles.about_text} ${layout.text_color_white} ${
              layout.element_apear_on_scroll
            } ${positions.text3 <= 100 && layout.element_not_scrolled}`}
            ref={text3Ref}
          >
            With seven years of experience in system administration, I possess
            excellent knowledge of computer hardware and network configuration.
            My technical background provides me with a solid foundation for
            working in the field of web development.
          </span>
          <span
            className={`${styles.about_text} ${layout.text_color_white} ${
              layout.element_apear_on_scroll
            } ${positions.text4 <= 100 && layout.element_not_scrolled}`}
            ref={text4Ref}
          >
            Despite lacking practical experience, I created a website for the
            organization where I worked. To enhance my skills, I embarked on a
            learning journey at{" "}
            <Link
              className={`${styles.cv_about__rs_link} ${layout.text_color_white}`}
              href="https://rollingscopes.com/"
            >
              RS School
            </Link>
            . Here, I acquired skills in developing modern, responsive web
            applications, learned how to collaborate effectively on team
            projects in various roles, conduct code reviews and refactoring, and
            present completed work.
          </span>
          <span
            className={`${styles.about_text} ${layout.text_color_white} ${
              layout.element_apear_on_scroll
            } ${positions.text5 <= 100 && layout.element_not_scrolled}`}
            ref={text5Ref}
          >
            I am currently seeking full-time employment where I can apply my
            knowledge and skills to continually improve and innovate.
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;
