import { Link } from 'react-router-dom';

import './header.css';

function Header() {
  return (
    <header className="header section-dark text-color-white">
      <div className="header-box">
        <nav className="header-menu">
          <Link to="/" className="menu-link text-color-white">
            CV
          </Link>
          <Link to="/" className="menu-link text-color-white">
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
