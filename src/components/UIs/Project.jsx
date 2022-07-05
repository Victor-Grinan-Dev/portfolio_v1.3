import React from 'react';

function Project({id, title, description, image, url}) {
  return (
    <div>
        <a href={url ? url : "#"}>
            <div id={id} class="projectImg">
                <img src={image} alt={title} />
            </div>
        </a> 
    
        <div class="description">
            <h4 class="projectTitle"> "{title}" </h4>
            <p class="descriptionText"> {description ? description: "Lorem ipsum dolor sit amede."}  </p>
        </div>
    </div>
  )
}

export default Project