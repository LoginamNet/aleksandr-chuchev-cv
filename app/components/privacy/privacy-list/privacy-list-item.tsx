"use client";

import { useRef, useState, useEffect } from "react";

import layout from "../../../layout.module.css";
import styles from "../privacy.module.css";

type ComponentProps = {
  text: string;
};

function PrivacyListItem(props: ComponentProps) {
  const { text } = props;

  const listElRef = useRef<HTMLLIElement>(null);

  const [position, setPosition] = useState(0);

  const handleScroll = () => {
    if (listElRef.current !== null) {
      setPosition(
        window.innerHeight - listElRef.current.getBoundingClientRect().top
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
    <li
      className={`${styles.privacy_text} ${layout.text_color_white} ${
        layout.element_apear_on_scroll
      } ${position <= 100 && layout.element_not_scrolled}`}
      ref={listElRef}
    >
      {text}
    </li>
  );
}

export default PrivacyListItem;
