import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const SingleProject = ({name}) => {
  const location = useLocation();
  const project = location.state.data;
  
  
  const capitalStart = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className= "page" >
        <div className="content">
            <NavLink to="/projects"><p>{"<<Back to Projects"}</p></NavLink>
        </div>
    </div>
  );
};

export default SingleProject;