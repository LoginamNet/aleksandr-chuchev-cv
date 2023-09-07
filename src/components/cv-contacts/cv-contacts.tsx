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
        <div className="cv-contacts__square"></div>
        <div className="cv-contacts__main-box">
          <span className="contacts-phone">
            <a
              className="contacts-text contacts-phone__number text-color-white"
              href="tel:+79774733956"
            >
              8 977 473-39-56
            </a>
            <div className="contacts-phone__rectangle"></div>
          </span>
          <a
            className="contacts-text contacts-mail text-color-white"
            href="mailto:loginamnet@gmail.com"
          >
            loginamnet@gmail.com
          </a>
        </div>
        <div className="cv-contacts__side-box">
          <div
            className="socilal-icon socilal-icon__github-peperment"
            onClick={() => (window.location.href = 'https://github.com/LoginamNet')}
          ></div>
          <div
            className="socilal-icon socilal-icon__discord"
            onClick={() => (window.location.href = 'https://discordapp.com/users/loginamnet')}
          ></div>
          <div
            className="socilal-icon socilal-icon__telegram"
            onClick={() => (window.location.href = 'https://t.me/LoginamNet')}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
