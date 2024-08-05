"use client";

import { useEffect, useLayoutEffect, useState } from "react";

import layout from "../../layout.module.css";
import styles from "./preloader.module.css";

type ComponenProps = { loaded: boolean };

function Preloader(props: ComponenProps) {
  const { loaded } = props;

  const percentages = [0, 14, 27, 38, 42, 53, 64, 75, 86, 100];

  const [isLoaded, setIsLoaded] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(true);

  const handleTransition = () => {
    setIsDisplayed(false);
  };

  const hanldeInitialLoad = () => {
    const preloader = setTimeout(() => {
      setIsLoaded(true);
      clearTimeout(preloader);
    }, 2000);
  };

  useLayoutEffect(() => {
    if (!isLoaded) {
      document.body.style.overflow = "hidden";
    }
    if (isLoaded) {
      document.body.style.overflow = "auto";
    }
  }, [isLoaded]);

  useEffect(() => {
    loaded && hanldeInitialLoad();
  }, [loaded]);

  return (
    isDisplayed && (
      <div
        className={`${styles.preloader} ${
          !isLoaded ? styles.preloader_shown : ""
        } ${isLoaded ? layout.section_rounded_top : ""}`}
        onTransitionEnd={handleTransition}
      >
        <div className={styles.preloader__background_blue}>
          <div
            className={`${styles.preloader__percentages_box} ${styles.preloader__percentages_box_align_left}`}
          >
            <div className={styles.preloader__percentages_slider}>
              <div className={styles.preloader__percentages}>
                {percentages.map((percent, key) => (
                  <span
                    key={key}
                    className={`${styles.preloader__percentages_box_text} ${layout.text_color_white}`}
                  >
                    {percent}
                  </span>
                ))}
              </div>
            </div>
            <span
              className={`${styles.preloader__percentages_box_text} ${layout.text_color_white}`}
            >
              %
            </span>
          </div>
        </div>
        <div className={styles.preloader__background_white}>
          <div
            className={`${styles.preloader__percentages_box} ${styles.preloader__percentages_box_align_right}`}
          >
            <div className={styles.preloader__percentages_slider}>
              <div className={styles.preloader__percentages}>
                {percentages.map((percent, key) => (
                  <span
                    key={key}
                    className={`${styles.preloader__percentages_box_text} ${layout.text_color_blue}`}
                  >
                    {percent}
                  </span>
                ))}
              </div>
            </div>
            <span
              className={`${styles.preloader__percentages_box_text} ${layout.text_color_blue}`}
            >
              %
            </span>
          </div>
        </div>
      </div>
    )
  );
}

export default Preloader;
