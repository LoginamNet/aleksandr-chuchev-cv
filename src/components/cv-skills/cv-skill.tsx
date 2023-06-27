import './cv-skill.css';

type ComponentProps = {
  name: string;
  description: string;
};

function Skill(props: ComponentProps) {
  return (
    <div className="cv-skills__skills-box">
      <div className="cv-skill">
        <span className="cv-skill-text text-color-white">{props.name}</span>
        <span className="cv-skill-description text-color-peperment">{props.description}</span>
        <div className="cv-skill-line"></div>
      </div>
    </div>
  );
}

export default Skill;
