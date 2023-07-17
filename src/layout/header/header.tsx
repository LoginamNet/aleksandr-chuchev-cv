import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
          <HashLink to="#contacts" className="menu-link text-color-white">
            Contacts
          </HashLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
