"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import layout from "../../layout.module.css";
import styles from "./header.module.css";

function Header() {
  const pathname = usePathname();

  return (
    <header
      className={`${styles.header} ${
        pathname === "/projects" || pathname === "/privacy-policy"
          ? layout.section_dark
          : layout.section_white
      }`}
    >
      <div className={styles.header_box}>
        <nav
          className={
            pathname === "/" ? styles.header_menu : layout.non_displayed
          }
        >
          <Link
            href="#about"
            className={`${layout.cv_link} ${layout.cv_link_bold} ${layout.cv_link_underline} ${layout.cv_link_underline_blue} ${layout.text_color_dark}`}
          >
            About
          </Link>
          <Link
            href="#skills"
            className={`${layout.cv_link} ${layout.cv_link_bold} ${layout.cv_link_underline} ${layout.cv_link_underline_blue} ${layout.text_color_dark}`}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className={`${layout.cv_link} ${layout.cv_link_bold} ${layout.cv_link_underline} ${layout.cv_link_underline_blue} ${layout.text_color_dark}`}
          >
            Works
          </Link>
          <Link
            href="#contacts"
            className={`${layout.cv_link} ${layout.cv_link_bold} ${layout.cv_link_underline} ${layout.cv_link_underline_blue} ${layout.text_color_dark}`}
          >
            Contacts
          </Link>
        </nav>
        <nav
          className={
            pathname === "/projects" || pathname === "/privacy-policy"
              ? styles.header_menu
              : layout.non_displayed
          }
        >
          <Link
            href="/"
            className={`${layout.cv_link} ${layout.cv_link_bold} ${layout.cv_link_underline} ${layout.cv_link_underline_peperment} ${layout.text_color_white}`}
          >
            Back to Main
          </Link>
          <Link
            href="#contacts"
            className={`${layout.cv_link} ${layout.cv_link_bold} ${layout.cv_link_underline} ${layout.cv_link_underline_peperment} ${layout.text_color_white}`}
          >
            Contacts
          </Link>
        </nav>
        <nav
          className={
            pathname !== "/projects" &&
            pathname !== "/privacy-policy" &&
            pathname !== "/"
              ? styles.header_menu
              : layout.non_displayed
          }
        >
          <Link
            href="/"
            className={`${layout.cv_link} ${layout.cv_link_bold} ${layout.cv_link_underline} ${layout.cv_link_underline_blue} ${layout.text_color_dark}`}
          >
            Back to Main
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
