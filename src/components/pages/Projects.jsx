import React from 'react';
import projects from './dummy_projects';
import Project from '../UIs/Project';
import { useState } from 'react';

function Projects() {
    const [stateProjects, setStateProjects] = useState({});
    
  return (
    <div className='page'>
       <div className="content">
        <h1> Projects </h1>
            {projects.map(project => (
                <Project 
                key={project.id} 
                id={project.id} 
                title={project.title} 
                description={project.description} 
                image={project.image} 
                url={project.url} />
            ))}
       </div>
    </div>
  )
}

export default Projects