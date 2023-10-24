import { useEffect, useRef, useState } from 'react';

import ButtonRounded from '../buttons/button-rounded';
import Contacts from '../contacts/contacts';

import './cv-contacts.css';

function CVContacts() {
  const emailRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [positions, setPositions] = useState({ email: 0, button: 0 });

  const handleScroll = () => {
    if (emailRef.current !== null && buttonRef.current !== null) {
      setPositions({
        email: window.screen.height - emailRef.current.getBoundingClientRect().top,
        button: window.screen.height - buttonRef.current.getBoundingClientRect().top,
      });
    }
  };

  useEffect(() => {
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <section className="section section-dark section-rounded-bottom" id="contacts">
      <div className="cv-contacts__background">
        <div className="cv-contacts__background-backdrop">
          <img className="cv-contacts__background-image" src="/contacts_letters.svg" alt=""></img>
        </div>
      </div>
      <div className="wrapper cv-contacts">
        <span
          className={`contacts-mail element-apear-on-scroll ${
            positions.email <= 100 && 'element-not-scrolled'
          }`}
          ref={emailRef}
        >
          <a className="text-color-white" href="mailto:loginamnet@gmail.com">
            loginamnet@gmail.com
          </a>
        </span>
        <div
          className={`cv-cards__buttons element-apear-on-scroll ${
            positions.button <= 100 && 'element-not-scrolled'
          }`}
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
