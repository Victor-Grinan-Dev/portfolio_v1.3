import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const SingleProduct = () => {
  const location = useLocation();
  const product = location.state.data;
  
  const capitalStart = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className= "page" >
      <NavLink to="/browse"><p>{"<<Back to Browser"}</p></NavLink>
      
      <div className="imageSingleContainer" >
        <img id={product.name} src={product.image} alt={product.name} className="imageSingle" />
      </div>
      
      <div className="dataContainer" >
        <div className="dataHeader" >
          <h2 className="foodName">"{capitalStart(product.name)}"</h2>
          {/*           <img id={product.name} src={country.flag} alt={country.name}  className= "flag" /> */}
        </div>
        <h3>components:</h3>
        <ul>
        {
          product.components.map((item) => (
            <li id={item.id}>
              {capitalStart(item.component)} - {item.quantity}
             </li>
          ))
          }
        </ul>
        <br/>
        <p className="instructionText">{capitalStart(product.instruction)}</p>
      </div>
    </div>
  );
};

export default SingleProduct;