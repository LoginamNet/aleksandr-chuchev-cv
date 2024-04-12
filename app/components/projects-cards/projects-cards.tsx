import Card from "../card/card";

import layout from "../../layout.module.css";
import styles from "./projects-cards.module.css";

import CV_DATA from "../../constants/cv-data";

function ProjectsCards() {
  return (
    <section
      className={`${layout.section} ${layout.section_dark}`}
      id="projects"
    >
      <div className={`${layout.wrapper} ${styles.projects_cards}`}>
        <div className={styles.projects_cards__box_static}>
          <div className={styles.projects_cards__box}>
            {CV_DATA.projects
              .slice(0, CV_DATA.projects.length / 2 + 1)
              .map((el, key) => (
                <Card
                  key={key}
                  name={el.name}
                  link={el.link}
                  github={el.github}
                  screenshot={el.screenshot}
                  isScreenshootDark={el.isScreenshootDark}
                  description={el.description}
                  team={el.team}
                  tech={el.tech}
                  isFlexible={true}
                />
              ))}
          </div>
          <div className={styles.projects_cards__box}>
            {CV_DATA.projects
              .slice(CV_DATA.projects.length / 2 + 1)
              .map((el, key) => (
                <Card
                  key={key}
                  name={el.name}
                  link={el.link}
                  github={el.github}
                  screenshot={el.screenshot}
                  isScreenshootDark={el.isScreenshootDark}
                  description={el.description}
                  team={el.team}
                  tech={el.tech}
                  isFlexible={true}
                />
              ))}
          </div>
        </div>
        <div className={styles.projects_cards__box_dynamic}>
          <div className={styles.projects_cards__box}>
            {CV_DATA.projects
              .slice(0, CV_DATA.projects.length / 2 + 1)
              .map((el, key) => (
                <Card
                  key={key}
                  name={el.name}
                  link={el.link}
                  github={el.github}
                  screenshot={el.screenshot}
                  isScreenshootDark={el.isScreenshootDark}
                  description={el.description}
                  team={el.team}
                  tech={el.tech}
                  isFlexible={true}
                />
              ))}
          </div>
          <div className={styles.projects_cards__box}>
            {CV_DATA.projects
              .slice(CV_DATA.projects.length / 2 + 1)
              .map((el, key) => (
                <Card
                  key={key}
                  name={el.name}
                  link={el.link}
                  github={el.github}
                  screenshot={el.screenshot}
                  isScreenshootDark={el.isScreenshootDark}
                  description={el.description}
                  team={el.team}
                  tech={el.tech}
                  isFlexible={true}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsCards;
