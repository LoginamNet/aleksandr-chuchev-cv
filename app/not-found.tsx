"use client";

import { useState, useEffect } from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import layout from "./layout.module.css";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Aleksandr Chuchev | 404",
  description: "Oops! You're lost..",
  openGraph: {
    title: "Aleksandr Chuchev | 404",
    description: "Oops! You're lost..",
    // images: [
    //   {
    //     url: "https://i.postimg.cc/CM29rWxd/HelloBG.webp",
    //     secureUrl: "https://i.postimg.cc/CM29rWxd/HelloBG.webp",
    //     width: 1450,
    //     height: 710,
    //     alt: "Превью для сайта https://aleksandr-chuchev.netlify.app",
    //   },
    // ],
  },
};

export default function NotFound() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const fullText = "Oops! You're lost..";

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 70);
    }
  }, [fullText, index, text]);

  return (
    <section className={`${layout.section} ${styles.section__404}`}>
      <div className={styles.not_found__background}>
        <Image
          className={styles.not_found__background_image}
          src="/404.svg"
          fill={true}
          priority={true}
          alt="404"
        />
      </div>
      <div className={layout.wrapper}>
        <div className={styles.not_found__main_box}>
          <h1 className={layout.text_color_blue}>
            {text}
            <span className={layout.cursor}>|</span>
          </h1>
          <Link href="/" className={styles.not_found__button}>
            Back to Main
            <svg width="25" height="6" viewBox="0 0 25 6" fill="none">
              <path
                d="M21.2235 2.18487V0L24.9689 2.80899L21.2235 5.61798V3.43326H0V2.18487H21.2235Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
