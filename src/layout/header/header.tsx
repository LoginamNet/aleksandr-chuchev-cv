import { Link } from 'react-router-dom';

import './header.css';

function Header() {
  return (
    <header className="header section-dark text-color-white">
      <div className="header-box">
        <Link to="/" className="menu-link text-color-white">
          CV
        </Link>
        <nav className="header-menu">
          <Link to="/" className="menu-link text-color-white">
            Projects
          </Link>
          <Link to="/1" className="menu-link text-color-white">
            Contacts
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
