import { useState } from 'react';

import ButtonRounded from '../buttons/button-rounded';
import Contacts from '../contacts/contacts';

import './cv-contacts.css';

function CVContacts() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section section-dark section-rounded-bottom" id="contacts">
      <div className="cv-contacts__background">
        <div className="cv-contacts__background-backdrop">
          <img className="cv-contacts__background-image" src="/contacts_letters.svg" alt=""></img>
        </div>
      </div>
      <div className="wrapper cv-contacts">
        <span className="contacts-mail">
          <a className="text-color-white" href="mailto:loginamnet@gmail.com">
            loginamnet@gmail.com
          </a>
          <div className="contacts-mail__rectangle"></div>
        </span>
        <ButtonRounded
          type="switch"
          text="contact me"
          style="dark"
          onClick={() => setIsOpen(true)}
        />
      </div>
      {isOpen && <Contacts setIsOpen={setIsOpen} />}
    </section>
  );
}

export default CVContacts;
