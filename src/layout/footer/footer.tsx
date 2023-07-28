import './footer.css';

function Footer() {
  return (
    <footer className="footer section-dark">
      <div className="footer-box">
        <span className="text-color-peperment">2023 by Aleksandr Chuchev</span>
        <div className="footer-box__social-icons">
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
    </footer>
  );
}

export default Footer;
