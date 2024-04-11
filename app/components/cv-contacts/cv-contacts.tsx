"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import ButtonRounded from "../buttons/button-rounded";
import Contacts from "../contacts/contacts";

import layout from "../../layout.module.css";
import styles from "./cv-contacts.module.css";

function CVContacts() {
  const emailRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [positions, setPositions] = useState({ email: 0, button: 0 });

  const handleScroll = () => {
    if (emailRef.current !== null && buttonRef.current !== null) {
      setPositions({
        email:
          window.innerHeight - emailRef.current.getBoundingClientRect().top,
        button:
          window.innerHeight - buttonRef.current.getBoundingClientRect().top,
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
      className={`${layout.section} ${layout.section_dark} ${layout.section_rounded_bottom}`}
      id="contacts"
    >
      <div className={styles.cv_contacts__background}>
        <div className={styles.cv_contacts__background_backdrop}>
          <Image
            className={styles.cv_contacts__background_image}
            src="/contacts_letters.svg"
            fill={true}
            priority={true}
            alt="Background Image"
          />
        </div>
      </div>
      <div className={`${layout.wrapper} ${styles.cv_contacts}`}>
        <span
          className={`${styles.contacts_mail} ${
            layout.element_apear_on_scroll
          } ${positions.email <= 100 && layout.element_not_scrolled}`}
          ref={emailRef}
        >
          <Link
            className={layout.text_color_white}
            href="mailto:loginamnet@gmail.com"
          >
            loginamnet@gmail.com
          </Link>
          <div className={styles.contacts_mail__rectangle}></div>
        </span>
        <div
          className={`${styles.cv_cards__buttons} ${
            layout.element_apear_on_scroll
          } ${positions.button <= 100 && layout.element_not_scrolled}`}
          ref={buttonRef}
        >
          <ButtonRounded
            type="switch"
            text="contact me"
            style="dark"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      {isOpen && <Contacts setIsOpen={setIsOpen} />}
    </section>
  );
}

export default CVContacts;
