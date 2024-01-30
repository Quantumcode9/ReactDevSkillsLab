export default function SkillListItem({ skill, level }) {
    return (
      <li className="SkillListItem">
        {skill}
        <span className="level">LEVEL {level}</span>
      </li>
    );
  }