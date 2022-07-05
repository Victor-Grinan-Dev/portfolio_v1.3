import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({ name, description, image, data, country }) => {

  const capitalStart = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className="cardBox" >
      
      <div className="cardHeader" >
        <h2 className="name" >{capitalStart(name)}:</h2>
       {/*  <img src={country.flag} alt={country.name} className="flag" /> */}
      </div>
      
      <div className="imageContainer" >
        <Link 
          to={name} 
          state={{ data: data}}
        >
          <img src={image} alt={name} className="image" /> 
        </Link>         
      </div>
      
      <p className="description" >{capitalStart(description)}</p>
      
      
      <div className="seeMore" >
        <Link to={name} state={{ data: data}}>
          See more
        </Link>
      </div>
    </div>
  );
};

export default Card;