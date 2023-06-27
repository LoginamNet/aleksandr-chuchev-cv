import './footer.css';

function Footer() {
  return (
    <footer className="footer text-color-peperment">
      <span>2023 by Aleksandr Chuchev</span>
      <div className="footer_social-icons">
        <div
          className="socilal-icon socilal-icon_github"
          onClick={() => (window.location.href = 'https://github.com/LoginamNet')}
        ></div>
        <div
          className="socilal-icon socilal-icon_discord"
          onClick={() => (window.location.href = 'https://discordapp.com/users/loginamnet')}
        ></div>
      </div>
    </footer>
  );
}

export default Footer;
