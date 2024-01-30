import React, { useState } from 'react';
export default function NewSkillForm({ onAddSkill }) {
        
    const [skill, setSkill] = useState('');
    const [level, setLevel] = useState('1');
    
    const handleSkillChange = (event) => {
        setSkill(event.target.value);
      };
    
      const handleLevelChange = (event) => {
        setLevel(event.target.value);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if (!skill) return; 
    
        onAddSkill({ name: skill, level });
        setSkill(''); 
        setLevel('1'); 
      };
    
      return (
        <form onSubmit={handleSubmit} className="NewSkillForm">
          <label>
            Skill
            <input type="text" name="skill" value={skill} onChange={handleSkillChange} />
          </label>
          <br />
          <label>
            Level
            <select name="level" value={level} onChange={handleLevelChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <br />
          <button type="submit">ADD SKILL</button>
        </form>
      );
    }