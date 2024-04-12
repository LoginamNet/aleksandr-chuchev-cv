import { useEffect, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";

import LeftBar from "./left-bar/left-bar";
import ContactForm from "./contact-form/contact-form";

import styles from "./contacts.module.css";

type ComponentProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Contacts(props: ComponentProps) {
  const { setIsOpen } = props;

  const [isDisplayed, setIsDisplayed] = useState(false);

  const handleClose = (event: React.MouseEvent) => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      setIsDisplayed(false);
    }
  };

  const handleTransition = () => {
    !isDisplayed && setIsOpen(false);
  };

  useEffect(() => {
    setIsDisplayed(true);
  }, [setIsDisplayed]);

  return (
    <RemoveScroll enabled={isDisplayed} removeScrollBar={false}>
      <div
        className={`${styles.contacts_background} ${
          isDisplayed && styles.contacts_background_shown
        }`}
        onClick={(event: React.MouseEvent<HTMLElement>) => handleClose(event)}
        onTransitionEnd={handleTransition}
      >
        <div
          className={`${styles.contacts} ${
            isDisplayed && styles.contacts_shown
          }`}
        >
          <div className={styles.contacts__box}>
            <svg
              className={styles.contacts__close_button}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              onClick={handleClose}
            >
              <path
                d="M21.2613 20.2013C21.335 20.27 21.3941 20.3528 21.4351 20.4448C21.4761 20.5368 21.4981 20.6361 21.4999 20.7368C21.5017 20.8375 21.4831 20.9375 21.4454 21.0309C21.4077 21.1243 21.3515 21.2091 21.2803 21.2803C21.2091 21.3515 21.1243 21.4077 21.0309 21.4454C20.9375 21.4831 20.8375 21.5017 20.7368 21.4999C20.6361 21.4981 20.5368 21.4761 20.4448 21.4351C20.3528 21.3941 20.27 21.335 20.2013 21.2613L11.7313 12.7925L3.26129 21.2613C3.11912 21.3938 2.93107 21.4659 2.73677 21.4625C2.54247 21.459 2.35708 21.3803 2.21967 21.2429C2.08226 21.1055 2.00355 20.9201 2.00012 20.7258C1.99669 20.5315 2.06881 20.3435 2.20129 20.2013L10.67 11.7313L2.20129 3.26129C2.06881 3.11912 1.99669 2.93107 2.00012 2.73677C2.00355 2.54247 2.08226 2.35708 2.21967 2.21967C2.35708 2.08226 2.54247 2.00355 2.73677 2.00012C2.93107 1.99669 3.11912 2.06881 3.26129 2.20129L11.7313 10.67L20.2013 2.20129C20.3435 2.06881 20.5315 1.99669 20.7258 2.00012C20.9201 2.00355 21.1055 2.08226 21.2429 2.21967C21.3803 2.35708 21.459 2.54247 21.4625 2.73677C21.4659 2.93107 21.3938 3.11912 21.2613 3.26129L12.7925 11.7313L21.2613 20.2013Z"
                fill="#274C52"
              />
            </svg>

            <LeftBar />
            <ContactForm setIsDisplayed={setIsDisplayed} />
          </div>
        </div>
      </div>
    </RemoveScroll>
  );
}

export default Contacts;
