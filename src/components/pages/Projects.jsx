import React from 'react';
import projects from './dummy_projects';
import Project from '../UIs/Project';

function Projects() {
  return (
    <div>
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
  )
}

export default Projects