import layout from "../../layout.module.css";
import styles from "./preloader.module.css";

type ComponentProps = {
  isPageLoaded: boolean;
  setIsPreloadesDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
};

function Preloader(props: ComponentProps) {
  const { isPageLoaded, setIsPreloadesDisplayed } = props;

  const percentages = [0, 14, 27, 38, 42, 53, 64, 75, 86, 100];

  const handleTransition = () => {
    setIsPreloadesDisplayed(false);
  };

  return (
    <div
      className={`${styles.preloader} ${
        !isPageLoaded ? styles.preloader_shown : ""
      } ${isPageLoaded ? layout.section_rounded_top : ""}`}
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
  );
}

export default Preloader;
