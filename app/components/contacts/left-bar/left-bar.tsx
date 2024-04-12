import Link from "next/link";

import layout from "../../../layout.module.css";
import styles from "./left-bar.module.css";

function LeftBar() {
  return (
    <div className={styles.left_bar}>
      <div className={styles.left_bar__texts_box}>
        <h2 className={layout.text_color_white}>/contact me</h2>
        <div className={styles.left_bar_devider} />
        <span
          className={`${styles.left_bar_text_big} ${layout.text_color_white}`}
        >
          Ready to answer your questions. Get in touch!
        </span>
      </div>
      <div className={styles.left_bar__links_box}>
        <Link
          className={`${styles.left_bar__mail} ${styles.left_bar__social_link} ${styles.left_bar_text} ${layout.text_color_white}`}
          href="mailto:loginamnet@gmail.com"
        >
          loginamnet@gmail.com
        </Link>
        <div className={styles.left_bar__social_links}>
          <Link
            className={`${styles.left_bar__social_link} ${styles.left_bar_text} ${layout.text_color_white}`}
            href="https://github.com/LoginamNet"
          >
            GitHub
          </Link>
          <span
            className={`${styles.left_bar_text} ${layout.text_color_white}`}
          >
            /
          </span>
          <Link
            className={`${styles.left_bar__social_link} ${styles.left_bar_text} ${layout.text_color_white}`}
            href="https://discordapp.com/users/loginamnet"
          >
            Discord
          </Link>
          <span
            className={`${styles.left_bar_text} ${layout.text_color_white}`}
          >
            /
          </span>
          <Link
            className={`${styles.left_bar__social_link} ${styles.left_bar_text} ${layout.text_color_white}`}
            href="https://t.me/LoginamNet"
          >
            Telegram
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
