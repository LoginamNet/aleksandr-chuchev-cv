import { HashLink } from 'react-router-hash-link';

import './footer.css';

function Footer() {
  return (
    <footer className="footer section-white">
      <div className="footer-box">
        <div className="footer-box__top-panel">
          <div className="footer-box__authors">
            <span className="text-color-dark">Code by Aleksandr Chuchev</span>
            <span className="text-color-dark">Design by Aleksandra Solovei</span>
          </div>
          <div className="footer-box__links">
            <div className="footer-box__cv-links">
              <HashLink to="/#about" className="cv-link cv-link__underline text-color-dark">
                About
              </HashLink>
              <HashLink to="#projects" className="cv-link cv-link__underline text-color-dark">
                Works
              </HashLink>
              <HashLink to="/#skills" className="cv-link cv-link__underline text-color-dark">
                Skills
              </HashLink>
            </div>
            <div className="footer-box__social-links">
              <span
                className="cv-link cv-link__underline text-color-dark"
                onClick={() => (window.location.href = 'https://github.com/LoginamNet')}
              >
                GitHub
              </span>
              <span
                className="cv-link cv-link__underline text-color-dark"
                onClick={() => (window.location.href = 'https://discordapp.com/users/loginamnet')}
              >
                Discord
              </span>
              <span
                className="cv-link cv-link__underline text-color-dark"
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
            <span className="text-color-dark text-uppercased">Back to top</span>
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
              <path
                d="M15.1474 7.89749C15.0419 8.00283 14.8989 8.062 14.7499 8.062C14.6008 8.062 14.4579 8.00283 14.3524 7.89749L8.56238 2.10843V17.25C8.56238 17.3992 8.50312 17.5423 8.39763 17.6477C8.29214 17.7532 8.14907 17.8125 7.99988 17.8125C7.8507 17.8125 7.70763 17.7532 7.60214 17.6477C7.49665 17.5423 7.43738 17.3992 7.43738 17.25V2.10843L1.64739 7.89749C1.54075 7.99685 1.39972 8.05095 1.25399 8.04837C1.10827 8.0458 0.969228 7.98677 0.866168 7.88371C0.763109 7.78065 0.704075 7.64161 0.701504 7.49588C0.698932 7.35016 0.753025 7.20912 0.852385 7.10249L7.60239 0.352493C7.70785 0.247155 7.85082 0.187988 7.99988 0.187988C8.14895 0.187988 8.29192 0.247155 8.39739 0.352493L15.1474 7.10249C15.2527 7.20796 15.3119 7.35093 15.3119 7.49999C15.3119 7.64906 15.2527 7.79202 15.1474 7.89749Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
