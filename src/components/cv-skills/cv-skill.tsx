import './cv-skill.css';

type ComponentProps = {
  name: string;
};

function Skill(props: ComponentProps) {
  return (
    <div className="cv-skill">
      <span className="cv-skill-text">{props.name}</span>
    </div>
  );
}

export default Skill;
