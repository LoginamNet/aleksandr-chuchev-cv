import './projects-card.css';

type ComponentProps = {
  name: string;
  screenshot: string;
  description: string;
};

function ProjectsCard(props: ComponentProps) {
  return (
    <div className="projects-card">
      <div
        className="projects-card__image"
        style={{ backgroundImage: `url(${props.screenshot})` }}
      ></div>
      <div className="projects-card__info-box">
        <h2 className="projects-card__name text-color-peperment ">{props.name}</h2>
        <span className="projects-card__description text-color-white">{props.description}</span>
      </div>
    </div>
  );
}

export default ProjectsCard;
