import './projects-card.css';

type ComponentProps = {
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
      <span className="projects-card__description text-color-white ">{props.description}</span>;
    </div>
  );
}

export default ProjectsCard;
