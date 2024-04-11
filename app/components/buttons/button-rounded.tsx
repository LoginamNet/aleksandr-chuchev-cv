import { MouseEventHandler } from "react";
import Link from "next/link";

import layout from "../../layout.module.css";
import styles from "./button-rounded.module.css";

type ComponentProps = {
  type: string;
  text: string;
  style: string;
  linkTo?: string;
  hashTo?: string;
  sendingErr?: boolean;
  sendingSuccess?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

function ButtonRounded(props: ComponentProps) {
  const {
    type,
    text,
    style,
    linkTo,
    hashTo,
    sendingErr,
    sendingSuccess,
    onClick,
  } = props;

  return type === "link" ? (
    <Link
      href={linkTo ? linkTo : ""}
      className={`${styles.button_rounded} ${
        style === "blue"
          ? `${styles.button_rounded__blue} ${layout.text_color_white}`
          : style === "dark"
          ? `${styles.button_rounded__dark} ${layout.text_color_peperment}`
          : `${styles.button_rounded__clear} ${layout.text_color_blue}`
      }`}
    >
      {text}
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
          d="M24.2235 16.1849V14L27.9689 16.809L24.2235 19.618V17.4333H3V16.1849H24.2235Z"
          fill="currentColor"
        />
      </svg>
    </Link>
  ) : type === "hash" ? (
    <Link
      href={hashTo ? hashTo : ""}
      className={`${styles.button_rounded} ${
        style === "blue"
          ? `${styles.button_rounded__blue} ${layout.text_color_white}`
          : style === "dark"
          ? `${styles.button_rounded__dark} ${layout.text_color_peperment}`
          : `${styles.button_rounded__clear} ${layout.text_color_blue}`
      }`}
    >
      {text}
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
          d="M24.2235 16.1849V14L27.9689 16.809L24.2235 19.618V17.4333H3V16.1849H24.2235Z"
          fill="currentColor"
        />
      </svg>
    </Link>
  ) : type === "switch" ? (
    <button
      className={`${styles.button_rounded} ${
        style === "blue"
          ? `${styles.button_rounded__blue} ${layout.text_color_white}`
          : style === "dark"
          ? `${styles.button_rounded__dark} ${layout.text_color_peperment}`
          : `${styles.button_rounded__clear} ${layout.text_color_blue}`
      }`}
      onClick={onClick}
    >
      {text}
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
          d="M24.2235 16.1849V14L27.9689 16.809L24.2235 19.618V17.4333H3V16.1849H24.2235Z"
          fill="currentColor"
        />
      </svg>
    </button>
  ) : type === "submit" ? (
    <button
      type="submit"
      className={`${styles.button_rounded} ${styles.button_rounded__submit} ${
        style === "blue"
          ? `${styles.button_rounded__blue} ${layout.text_color_white}`
          : style === "dark"
          ? `${styles.button_rounded__dark} ${layout.text_color_peperment}`
          : `${styles.button_rounded__clear} ${layout.text_color_blue}`
      } ${sendingSuccess && styles.button_rounded__success} ${
        sendingErr && styles.button_rounded__error
      }`}
      onClick={onClick}
    >
      {text}
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
          d="M24.2235 16.1849V14L27.9689 16.809L24.2235 19.618V17.4333H3V16.1849H24.2235Z"
          fill="currentColor"
        />
      </svg>
    </button>
  ) : type === "download" ? (
    <a
      href={linkTo ? linkTo : ""}
      className={`${styles.button_rounded} ${
        style === "blue"
          ? `${styles.button_rounded__blue} ${layout.text_color_white}`
          : style === "dark"
          ? `${styles.button_rounded__dark} ${layout.text_color_peperment}`
          : `${styles.button_rounded__clear} ${layout.text_color_blue}`
      }`}
      download="resume"
    >
      {text}
    </a>
  ) : (
    <button
      className={`${styles.button_rounded} ${
        style === "blue"
          ? `${styles.button_rounded__blue} ${layout.text_color_white}`
          : style === "dark"
          ? `${styles.button_rounded__dark} ${layout.text_color_peperment}`
          : `${styles.button_rounded__clear} ${layout.text_color_blue}`
      }`}
    >
      {text}
    </button>
  );
}

export default ButtonRounded;
