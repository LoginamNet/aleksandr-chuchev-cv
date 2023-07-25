import './cv-card.css';

type ComponentProps = {
  screenshot: string;
  description: string;
};

function CVCard(props: ComponentProps) {
  return (
    <div className="cv-card">
      <div className="cv-card__image" style={{ backgroundImage: `url(${props.screenshot})` }}></div>
      <span className="cv-card__description text-color-white ">{props.description}</span>;
    </div>
  );
}

export default CVCard;
