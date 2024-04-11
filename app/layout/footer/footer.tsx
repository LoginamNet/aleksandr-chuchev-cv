"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import layout from "../../layout.module.css";
import styles from "./footer.module.css";

function Footer() {
  const pathname = usePathname();

  return (
    <footer className={`${styles.footer} ${layout.section_white}`}>
      <div className={styles.footer_box}>
        <div className={styles.footer_box__top_panel}>
          <div className={styles.footer_box__authors}>
            <span className={layout.text_color_dark}>
              Code by Aleksandr Chuchev
            </span>
            <span className={layout.text_color_dark}>
              {`Design by `}
              <Link
                className={`${styles.footer_link} ${layout.text_color_dark}`}
                href="https://www.linkedin.com/in/aleksandra-solovei"
              >
                Aleksandra Solovei
              </Link>
            </span>
            <Link
              className={`${styles.footer_link} ${layout.text_color_dark}`}
              href={
                pathname === "/privacy-policy"
                  ? "#privacy-policy"
                  : "/privacy-policy"
              }
            >
              Privacy Policy
            </Link>
          </div>
          <div className={styles.footer_box__links}>
            <div className={styles.footer_box__cv_links}>
              <Link
                href="/#about"
                className={`${layout.cv_link} ${layout.cv_link_underline} ${layout.cv_link_underline_blue} ${layout.text_color_dark}`}
              >
                About
              </Link>
              <Link
                href="/#skills"
                className={`${layout.cv_link} ${layout.cv_link_underline} ${layout.cv_link_underline_blue} ${layout.text_color_dark}`}
              >
                Skills
              </Link>
              <Link
                href={
                  pathname === "/" || pathname === "/projects"
                    ? "#projects"
                    : "/projects"
                }
                className={`${layout.cv_link} ${layout.cv_link_underline} ${layout.cv_link_underline_blue} ${layout.text_color_dark}`}
              >
                Works
              </Link>
            </div>
            <div className={styles.footer_box__social_links}>
              <Link
                className={`${styles.footer_link} ${layout.text_color_dark}`}
                href="https://github.com/LoginamNet"
              >
                GitHub
              </Link>
              <Link
                className={`${styles.footer_link} ${layout.text_color_dark}`}
                href="https://discordapp.com/users/loginamnet"
              >
                Discord
              </Link>
              <Link
                className={`${styles.footer_link} ${layout.text_color_dark}`}
                href="https://t.me/LoginamNet"
              >
                Telegram
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.footer_box__bottom_panel}>
          <span className={layout.text_color_dark}>© 2023</span>
          <div
            className={styles.footer_box__to_top}
            onClick={() => window.scrollTo(0, 0)}
          >
            <span className={layout.text_color_dark}>Back to Top</span>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path
                d="M7.35198 14.5V5.63599L7.43198 4.97999L7.23998 4.91599L6.87198 5.45999L4.51998 7.81199L3.70398 6.99599L7.52798 3.18799H8.39198L12.216 6.99599L11.4 7.81199L9.04798 5.45999L8.67998 4.91599L8.48798 4.97999L8.56798 5.63599V14.5H7.35198Z"
                fill="#0D1317"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
