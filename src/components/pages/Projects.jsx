import React from 'react';
import projects from './dummydb/dummy_projects'; //replace this with axios
import Project from '../UIs/Project';
import { useState } from 'react';

function Projects() {
    // const [projects, setProjects] = useState({});
    const [search, setSearch] = useState('');
    const projectsFilter = projects.filter((res) => {
        return res.title.toLowerCase().includes(search.toLowerCase());
      });
    
      const searchHandler = (e) => {
        setSearch(e.target.value); 
        };

  return (
    <div className='page'>
       <div className="content">
        <h1>"Projects"</h1>
        <div className="search">
            <input type="text" placeholder='Search...' onChange={searchHandler}/>
        </div>
        
        <div className="projects"
            style={{
                width:"80vw",
                minHeight:"100vh",
                display:"flex",
                flexWrap: "wrap",
            }}
        >
            

            {projectsFilter.map(project => (
                <Project 
                key={project.id} 
                id={project.id} 
                title={project.title} 
                description={project.description} 
                image={project.image} 
                url={project.url}
                {...project}
                />
            ))}
        </div>
       </div>
    </div>
  )
}

export default Projects