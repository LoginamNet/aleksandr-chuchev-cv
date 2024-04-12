"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

import layout from "../../../layout.module.css";
import styles from "../privacy.module.css";

type ComponentProps = {
  textBefore?: string;
  link?: string;
  linkHref?: string;
  textAfter?: string;
};

function PrivacyText(props: ComponentProps) {
  const { textBefore, link, linkHref, textAfter } = props;

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
    <span
      className={`${styles.privacy_text} ${layout.text_color_white} ${
        layout.element_apear_on_scroll
      } ${position <= 100 && layout.element_not_scrolled}`}
      ref={textRef}
    >
      {textBefore}
      <Link
        className={`${styles.privacy__link} ${layout.text_color_white}`}
        href={linkHref ? linkHref : ""}
      >
        {link}
      </Link>
      {textAfter}
    </span>
  );
}

export default PrivacyText;
