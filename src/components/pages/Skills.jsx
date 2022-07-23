import React from 'react';
import Skill from '../UIs/Skill';
import skills from './dummydb/dummy_skills';
import { languages, others } from './dummydb/dummy_skills';
import Language from '../UIs/Language';

function Skills() {
  return (
    <div className='page'>
        <div className="content">
        <h2>I'm familiar with:</h2>
        <div className="technologies" >

          <div className="languages">
            <h3>Languages</h3>
            <div className="tech">
            {languages.map(lang => (
                  <Language key={lang.id} name={lang.name} stars={lang.stars} logo={lang.image} />
              ))}
            </div>

          </div>

          <div className="other">
          <h3>Support</h3>
          <div className="tech">
          {others.map(other => (
                <Language key={other.id} name={other.name} stars={other.stars} logo={other.image} />
            ))}
          </div>
            
          </div>

        </div>

          <div className="frameworks">
          <h3>FrameWorks</h3>
            {skills.map(skill => (
                <Skill key={skill.id} name={skill.name} confidence={skill.confidence} />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Skills