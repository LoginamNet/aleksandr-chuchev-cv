import './cv-card.css';

type ComponentProps = {
  screenshot: string;
  description: string;
};

function Card(props: ComponentProps) {
  return (
    <div className="cv-card">
      <div className="cv-card-image" style={{ backgroundImage: `url(${props.screenshot})` }}></div>
      <span className="cv-card-description">{props.description}</span>;
    </div>
  );
}

export default Card;
