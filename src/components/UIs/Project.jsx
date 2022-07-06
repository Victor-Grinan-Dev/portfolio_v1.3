import React from 'react';
import { Link } from 'react-router-dom';

function Project({id, title, description, image, url, data}) {
  return (
    <div>
        <a href={url ? url : "#"}>
            <div id={id} className="projectImg">
                <img src={image} alt={title} />
            </div>
        </a> 
    
        <div className="description">
            <h4 className="projectTitle"> "{title}" </h4>
            <p className="descriptionText"> {description ? description: "Lorem ipsum dolor sit amede."}  </p>
        </div>

        <div className="seeMore" >
        <Link to={title} state={{ data:data }}>
          See more
        </Link>
      </div>
    </div>
  )
}

export default Project