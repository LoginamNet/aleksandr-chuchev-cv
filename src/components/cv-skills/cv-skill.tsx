import './cv-skill.css';

type ComponentProps = {
  name: string;
};

function Skill(props: ComponentProps) {
  return (
    <div className="cv-skill">
      {props.name}
      <span className="cv-skill-text text-color-white">{props.name}</span>
      <span className="cv-skill-text cv-skill-text__hidden text-color-white">{props.name}</span>
    </div>
  );
}

export default Skill;
