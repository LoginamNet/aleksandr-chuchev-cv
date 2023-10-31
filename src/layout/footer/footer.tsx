import { HashLink } from 'react-router-hash-link';

import './footer.css';

function Footer() {
  return (
    <footer className="footer section-white">
      <div className="footer-box">
        <div className="footer-box__top-panel">
          <div className="footer-box__authors">
            <span className="text-color-dark">Code by Aleksandr Chuchev</span>
            <span className="text-color-dark">
              Design by{' '}
              <a
                className="footer__link text-color-dark"
                href="https://www.linkedin.com/in/aleksandra-solovei"
              >
                Aleksandra Solovei
              </a>
            </span>
            <a
              className="footer__link text-color-dark"
              href="https://www.linkedin.com/in/aleksandra-solovei"
            >
              Privacy Policy
            </a>
          </div>
          <div className="footer-box__links">
            <div className="footer-box__cv-links">
              <HashLink
                to="/#about"
                className="cv-link cv-link__underline cv-link__underline-blue text-color-dark"
              >
                About
              </HashLink>
              <HashLink
                to="/#skills"
                className="cv-link cv-link__underline cv-link__underline-blue text-color-dark"
              >
                Skills
              </HashLink>
              <HashLink
                to="#projects"
                className="cv-link cv-link__underline cv-link__underline-blue text-color-dark"
              >
                Works
              </HashLink>
            </div>
            <div className="footer-box__social-links">
              <span
                className="footer__link text-color-dark"
                onClick={() => (window.location.href = 'https://github.com/LoginamNet')}
              >
                GitHub
              </span>
              <span
                className="footer__link text-color-dark"
                onClick={() => (window.location.href = 'https://discordapp.com/users/loginamnet')}
              >
                Discord
              </span>
              <span
                className="footer__link text-color-dark"
                onClick={() => (window.location.href = 'https://t.me/LoginamNet')}
              >
                Telegram
              </span>
            </div>
          </div>
        </div>
        <div className="footer-box__bottom-panel">
          <span className="text-color-dark">© 2023</span>
          <div className="footer-box__to-top" onClick={() => window.scrollTo(0, 0)}>
            <span className="text-color-dark">Back to top</span>
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
