
import SkillListItem from './SkillListItem';
export default function SkillList({ skills }) {
    return (
      <ul className="SkillList">
        {skills.map((skill) => (
          <SkillListItem key={skill.name} skill={skill.name} level={skill.level} />
        ))}
      </ul>
    );
  }
