import React from 'react';
import { Link } from 'react-router-dom';

function Project({id, title, description, image, url, data}) {

  return (
    <div className="project"
        style={{
            width:"200px",
            height:"250px",
            backgroundColor:"white",
            margin:"10px",
            boxShadow:"0 0 10px black"
        }}
    >
        <a href={url ? url : "#"}>
            <div id={id} className="projectImg"
                style={{
                    width:"180px",
                    height:"140px",
                    backgroundColor:"black",
                    margin:"10px",
                }}
            >
                <img src={image} alt={title} />
            </div>
        </a> 
    
        <div className="description"
            style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center"
            }}
        >
            <h4 className="projectTitle">"{title?title:"Unknown"}"</h4>
            <p className="descriptionText"> {description ? description: "Lorem ipsum dolor sit amede."}  </p>
        </div>

        <div className="seeMore" >
        <Link to={title} state={{ data:data }}>
          +Info
        </Link>
      </div>
    </div>
  )
}

export default Project;


/*
                <div class="project">
                    
                    <a href="#diceRollerImg">
                        <div id="diceRollerImg" class="projectImg">
                            <img src="/images/test_Img.png" alt="#">
                        </div>
                    </a>

                    <div class="description">
                        <h45 class="projectTitle">Dice Roller</5>
                        <p class="descriptionText">Lorem ipsum dolor sit amet</p>
                    </div>
                    
                </div>
*/