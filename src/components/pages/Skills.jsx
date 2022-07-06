import React from 'react';
import Skill from '../UIs/Skill';

const skills = [
    {
        name:"Python",
        confidence: "70%",
    },
    {
        name:"React",
        confidence: "60%",
    },
    {
        name:"Symphony",
        confidence: "50%",
    },
    {
        name:"Drupal",
        confidence: "0%",
    },
]

function Skills() {
  return (
    <div>
        <h1>Skills</h1>

        {skills.map(skill => (
            <Skill name={skill.name} confidence={skill.confidence} />
        ))}
    </div>
  )
}

export default Skills