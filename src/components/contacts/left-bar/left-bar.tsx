import './left-bar.css';

function LeftBar() {
  return (
    <div className="left-bar">
      <div className="left-bar__texts-box">
        <h2 className="text-color-white">/contact me</h2>
        <span className="left-bar-text text-color-white">
          Ready to answer your questions and assist with frontend projects.
          <br />
          Get in touch!
        </span>
      </div>
      <div className="left-bar__links-box">
        <a
          className="left-bar__mail left-bar-text text-color-white"
          href="mailto:loginamnet@gmail.com"
        >
          loginamnet@gmail.com
        </a>
        <div className="left-bar__social-links">
          <span
            className="left-bar__social-link left-bar-text text-color-white"
            onClick={() => (window.location.href = 'https://github.com/LoginamNet')}
          >
            GitHub
          </span>
          <span className="left-bar__social-link left-bar-text text-color-white">/</span>
          <span
            className="left-bar__social-link left-bar-text text-color-white"
            onClick={() => (window.location.href = 'https://discordapp.com/users/loginamnet')}
          >
            Discord
          </span>
          <span className="left-bar__social-link left-bar-text text-color-white">/</span>
          <span
            className="left-bar__social-link left-bar-text text-color-white"
            onClick={() => (window.location.href = 'https://t.me/LoginamNet')}
          >
            Telegram
          </span>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
