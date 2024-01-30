import React, { useState } from 'react';
import NewSkillForm from './NewSkillForm';
import './App.css';
import SkillList from './SkillList';



export default function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Dev Skills</h1>
      </header>
      <div className="container">
        <SkillList skills={skills} />
        <br />
        <NewSkillForm onAddSkill={skill => setSkills([...skills, skill])} />
      </div>
    </div>
  );
}
