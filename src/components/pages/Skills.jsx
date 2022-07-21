import React from 'react';
import Skill from '../UIs/Skill';
import skills from './dummydb/dummy_skills';
import { languages } from './dummydb/dummy_skills';
import Language from '../UIs/Language';

function Skills() {
  return (
    <div className='page'>
        <div className="content">
        <div className="languages">
          <h1>Languages</h1>
            {languages.map(lang => (
                <Language key={lang.id} name={lang.name} stars={lang.confidence} logo={lang.image} />
            ))}
          </div>
          <div className="frameworks">
          <h1>FrameWorks</h1>
            {skills.map(skill => (
                <Skill key={skill.id} name={skill.name} confidence={skill.confidence} />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Skills