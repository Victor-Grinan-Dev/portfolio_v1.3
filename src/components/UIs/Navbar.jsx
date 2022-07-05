import React from 'react';
import logo from '../assets/images/meLogo.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navContainer">

      <div className="logo">
        <NavLink to='/'><img src={logo}/></NavLink> 
      </div>

      <div className="navLinkContainer" >
        <NavLink to="browse" className='navLink' > Projects </NavLink>
        <NavLink to="skills" className='navLink' > Skills </NavLink>
        <NavLink to="gallery" className='navLink' > Gallery </NavLink>
        <NavLink to='/About' className='navLink' > About </NavLink>
        <NavLink to='/contacts' className='navLink'> Conctact Me </NavLink>

        <a className='navLink' href="https://www.bc.fi/?gclid=Cj0KCQjwmuiTBhDoARIsAPiv6L957izCclO7mHzuc9Q4NksNezhLDQ4OZ9Xqjn5T-regQ-2zJDkA69UaAlLQEALw_wcB" target="blank"> HBC </a>

      </div> 
    </div>
  )
}

export default Navbar;