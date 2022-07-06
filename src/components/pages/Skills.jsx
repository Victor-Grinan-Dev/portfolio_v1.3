import React from 'react';
import Skill from '../UIs/Skill';
import skills from './dummy_skills';

function Skills() {
  return (
    <div>
        <h1>Skills</h1>

        {skills.map(skill => (
            <Skill key={skill.id} name={skill.name} confidence={skill.confidence} />
        ))}
    </div>
  )
}

export default Skills