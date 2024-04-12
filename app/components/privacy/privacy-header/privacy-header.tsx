"use client";

import { useRef, useState, useEffect } from "react";

import layout from "../../../layout.module.css";
import styles from "../privacy.module.css";

type ComponentProps = {
  text: string;
};

function PrivacyHeader(props: ComponentProps) {
  const { text } = props;

  const textRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState(0);

  const handleScroll = () => {
    if (textRef.current !== null) {
      setPosition(
        window.innerHeight - textRef.current.getBoundingClientRect().top
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
    <h3
      className={`${styles.privacy_header} ${layout.text_color_white} ${
        layout.element_apear_on_scroll
      } ${position <= 100 && layout.element_not_scrolled}`}
      ref={textRef}
    >
      {text}
    </h3>
  );
}

export default PrivacyHeader;
