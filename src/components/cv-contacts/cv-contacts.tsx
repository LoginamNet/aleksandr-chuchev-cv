import ButtonRounded from '../buttons/button-rounded';

import './cv-contacts.css';

function Contacts() {
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
        <ButtonRounded type="" text="contact me" style="dark" />
      </div>
    </section>
  );
}

export default Contacts;
