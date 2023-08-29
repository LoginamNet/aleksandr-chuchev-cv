import ButtonRounded from '../buttons/button-rounded';

import './projects-contacts.css';

function ProjectsContacts() {
  return (
    <section className="section section-white">
      <div className="wrapper projects-contacts">
        <ButtonRounded type="hash" text="contact me" style="default" hashTo="/#contacts" />
      </div>
    </section>
  );
}

export default ProjectsContacts;
