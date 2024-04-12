"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

import ButtonCircle from "../buttons/button-circle";

import layout from "../../layout.module.css";
import styles from "./card.module.css";

type ComponentProps = {
  name: string;
  link: string;
  github: string;
  screenshot: string;
  isScreenshootDark: boolean;
  description: string;
  team: boolean;
  tech: string[];
  isFlexible: boolean;
};

function Card(props: ComponentProps) {
  const {
    name,
    link,
    github,
    screenshot,
    isScreenshootDark,
    description,
    team,
    tech,
    isFlexible,
  } = props;

  const elementRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, bottom: 0, height: 0 });

  const handleScroll = () => {
    if (elementRef.current !== null) {
      setPosition({
        top: elementRef.current.getBoundingClientRect().top,
        bottom: elementRef.current.getBoundingClientRect().bottom,
        height: elementRef.current.getBoundingClientRect().height,
      });
    }
  };

  const [windowSize, setWindowSize] = useState<{
    width: undefined | number;
    height: undefined | number;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      className={`${styles.card} ${layout.element_apear_on_scroll} ${
        (position.top < position.height / 2 ||
          (windowSize.height && position.bottom <= windowSize.height)) &&
        styles.card__scrolled
      } ${
        windowSize.height &&
        windowSize.height - position.top <= 100 &&
        layout.element_not_scrolled
      }`}
      onClick={() => (window.location.href = link)}
      ref={elementRef}
      id={name}
    >
      <div className={styles.card__box}>
        <div
          className={styles.card__image_box}
          style={{ backgroundImage: `url(${screenshot})` }}
        >
          <div
            className={styles.card__image}
            style={{ backgroundImage: `url(${screenshot})` }}
          />
          <div className={styles.card__tech_box}>
            {team && (
              <span
                className={`${styles.card__team} ${layout.text_color_white}`}
              >
                TEAM
              </span>
            )}
            {tech.map((el, key) => (
              <span
                key={key}
                className={`${styles.card__tech} ${
                  isScreenshootDark
                    ? `${styles.card__tech_white} ${layout.text_color_dark}`
                    : `${styles.card__tech_dark} ${layout.text_color_white}`
                }`}
              >
                {el}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.card__info_box}>
          <h2 className={`${styles.card__name} ${layout.text_color_dark}`}>
            {name}
          </h2>
          <span
            className={`${styles.card__description} ${styles.card_text} ${layout.text_color_dark}`}
          >
            {description}
          </span>
        </div>
        <div
          className={`${styles.card__buttons_hider} ${
            !isFlexible && styles.card__buttons_hider_constant
          }`}
        >
          <div className={styles.card__buttons_box}>
            <div className={styles.card__github_box}>
              <Link
                className={`${styles.card__github} ${styles.card_text} ${
                  styles.card_text_small
                } ${layout.text_color_dark} ${!github && layout.non_displayed}`}
                href={github}
              >
                View on GitHub
              </Link>
            </div>
            <div className={styles.card__deploy_box}>
              <span
                className={`${styles.card_text} ${styles.card_text_small} ${layout.text_color_dark}`}
              >
                Visit site
              </span>
              <div className={styles.card__button}>
                <ButtonCircle
                  bgColor="none"
                  borderColor="brown"
                  arrowColor="dark"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
