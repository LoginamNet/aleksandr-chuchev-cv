import styles from "./button-circle.module.css";

type ComponentProps = {
  bgColor: string;
  borderColor: string;
  arrowColor: string;
};

function ButtonCircle(props: ComponentProps) {
  const { bgColor, borderColor, arrowColor } = props;

  return (
    <div
      className={`${styles.button_circle} ${
        bgColor === "dark"
          ? styles.button_circle__bg_dark
          : bgColor === "brown"
          ? styles.button_circle__bg_brown
          : ""
      } ${
        borderColor === "white"
          ? styles.button_circle__border_white
          : borderColor === "brown"
          ? styles.button_circle__border_brown
          : ""
      } ${
        arrowColor === "white"
          ? styles.button_arrow_white
          : arrowColor === "dark"
          ? styles.button_arrow_dark
          : ""
      }`}
    >
      <div className={styles.button_circle__arrows_box}>
        <div className={styles.button_circle__arrow}>
          <svg width="32" height="32" viewBox="0 0 32 32">
            <path
              d="M21.7074 16.7075L11.7074 26.7075C11.6145 26.8004 11.5042 26.8741 11.3828 26.9244C11.2614 26.9747 11.1313 27.0006 10.9999 27.0006C10.8686 27.0006 10.7384 26.9747 10.617 26.9244C10.4957 26.8741 10.3854 26.8004 10.2924 26.7075C10.1995 26.6146 10.1258 26.5043 10.0756 26.3829C10.0253 26.2615 9.99939 26.1314 9.99939 26C9.99939 25.8686 10.0253 25.7385 10.0756 25.6171C10.1258 25.4957 10.1995 25.3854 10.2924 25.2925L19.5862 16L10.2924 6.7075C10.1048 6.51986 9.99939 6.26536 9.99939 6C9.99939 5.73464 10.1048 5.48014 10.2924 5.2925C10.4801 5.10486 10.7346 4.99944 10.9999 4.99944C11.2653 4.99944 11.5198 5.10486 11.7074 5.2925L21.7074 15.2925C21.8004 15.3854 21.8742 15.4957 21.9245 15.6171C21.9748 15.7385 22.0007 15.8686 22.0007 16C22.0007 16.1314 21.9748 16.2615 21.9245 16.3829C21.8742 16.5043 21.8004 16.6146 21.7074 16.7075Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={styles.button_circle__arrow}>
          <svg width="32" height="32" viewBox="0 0 32 32">
            <path
              d="M21.7074 16.7075L11.7074 26.7075C11.6145 26.8004 11.5042 26.8741 11.3828 26.9244C11.2614 26.9747 11.1313 27.0006 10.9999 27.0006C10.8686 27.0006 10.7384 26.9747 10.617 26.9244C10.4957 26.8741 10.3854 26.8004 10.2924 26.7075C10.1995 26.6146 10.1258 26.5043 10.0756 26.3829C10.0253 26.2615 9.99939 26.1314 9.99939 26C9.99939 25.8686 10.0253 25.7385 10.0756 25.6171C10.1258 25.4957 10.1995 25.3854 10.2924 25.2925L19.5862 16L10.2924 6.7075C10.1048 6.51986 9.99939 6.26536 9.99939 6C9.99939 5.73464 10.1048 5.48014 10.2924 5.2925C10.4801 5.10486 10.7346 4.99944 10.9999 4.99944C11.2653 4.99944 11.5198 5.10486 11.7074 5.2925L21.7074 15.2925C21.8004 15.3854 21.8742 15.4957 21.9245 15.6171C21.9748 15.7385 22.0007 15.8686 22.0007 16C22.0007 16.1314 21.9748 16.2615 21.9245 16.3829C21.8742 16.5043 21.8004 16.6146 21.7074 16.7075Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ButtonCircle;
