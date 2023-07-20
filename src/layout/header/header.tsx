import { HashLink } from 'react-router-hash-link';

import './header.css';

function Header() {
  return (
    <header className="header section-dark text-color-white">
      <div className="header-box">
        <nav className="header-menu">
          <HashLink to="#about" className="menu-link menu-link__underline text-color-white">
            About
          </HashLink>
          <HashLink to="#projects" className="menu-link menu-link__underline text-color-white">
            Projects
          </HashLink>
          <HashLink to="#skills" className="menu-link menu-link__underline text-color-white">
            Skills
          </HashLink>
          <HashLink to="#contacts" className="menu-link menu-link__underline text-color-white">
            Contacts
          </HashLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
