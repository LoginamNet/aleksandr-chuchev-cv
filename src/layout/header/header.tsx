import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './header.css';

function Header() {
  const location = useLocation();
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <header className="header section-white">
      <div className="header-box">
        <nav className={url !== '/' ? 'non-displayed' : 'header-menu'}>
          <HashLink to="#about" className="menu-link menu-link__underline text-color-dark">
            About
          </HashLink>
          <HashLink to="#projects" className="menu-link menu-link__underline text-color-dark">
            Projects
          </HashLink>
          <HashLink to="#skills" className="menu-link menu-link__underline text-color-dark">
            Skills
          </HashLink>
          <HashLink to="#contacts" className="menu-link menu-link__underline text-color-dark">
            Contacts
          </HashLink>
        </nav>
        <nav className={url === '/' ? 'non-displayed' : 'header-menu'}>
          <Link to="/" className="menu-link menu-link__underline text-color-dark">
            Back to CV
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
