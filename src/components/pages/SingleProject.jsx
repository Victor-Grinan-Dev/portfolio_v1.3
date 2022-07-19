import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const SingleProject = () => {
  const location = useLocation();
  const project = location.state.data;
  
  
  const capitalStart = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className= "page" >
      
      <div className="content">
        <div className="header"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width:"70vw",
            position: "fixed",
            top: 0,
            left: "21vw"

          }}
        >
            <NavLink to="/projects"><p>{"<<Back to Projects"}</p></NavLink>

            <h1>{project.title}</h1>

            <div className="projectMenu">
              <p>menu</p>
            </div>
        </div>

      </div>
        

    </div>
  );
};

export default SingleProject;