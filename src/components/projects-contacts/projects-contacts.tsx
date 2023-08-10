import { HashLink } from 'react-router-hash-link';

import './projects-contacts.css';

function ProjectsContacts() {
  return (
    <section className="section section-white">
      <div className="wrapper projects-contacts">
        <HashLink to="/#contacts" className="button-rounded projects-contacts__button">
          contact me
          <svg width="25" height="6" viewBox="0 0 25 6" fill="none">
            <path
              d="M21.2235 2.18487V0L24.9689 2.80899L21.2235 5.61798V3.43326H0V2.18487H21.2235Z"
              fill="currentColor"
            />
          </svg>
        </HashLink>
      </div>
    </section>
  );
}

export default ProjectsContacts;
