import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const SingleProject = ({name}) => {
  const location = useLocation();
  
  
  const capitalStart = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className= "page" >
      <NavLink to="/projects"><p>{"<<Back to Projects"}</p></NavLink>
      
      
    </div>
  );
};

export default SingleProject;