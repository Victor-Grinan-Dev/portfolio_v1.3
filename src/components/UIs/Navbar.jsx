import React from 'react';
import logo from '../assets/images/meLogo.png';
import { NavLink } from 'react-router-dom';

const navBarStyles ={
  navContainer:{
    width: "20vw",
    minWidth: "10vw",
    height: "100vh",
    marginRight: "50px",
    backgroundColor: "rgb(0, 0, 0)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    position: "fixed"
  },
  logo_img : {
    width: "100px",
    marginLeft: "50px",
  },
  navLinkContainer:{
    width: "80%",
    height: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginBotton: "10px"
  },
  navLink:{
    color: "beige",
    textDecoration: "none"
  }
}
//style={}
function Navbar() {
  return (
    <div className="navContainer" style={navBarStyles.navContainer}>

      <div className="logo">
        <NavLink to='/'>
          <img src={logo} style={navBarStyles.logo_img} />
        </NavLink> 
      </div>

      <div className="navLinkContainer" style={navBarStyles.navLinkContainer}>
        <NavLink to='/' className='navLink' style={navBarStyles.navLink}> About </NavLink>
        <NavLink to="projects" className='navLink' style={navBarStyles.navLink}> Projects </NavLink>
        <NavLink to="skills" className='navLink' style={navBarStyles.navLink}> Skills </NavLink>
        <NavLink to="gallery" className='navLink' style={navBarStyles.navLink}> Gallery </NavLink>
        <NavLink to='/contacts' className='navLink' style={navBarStyles.navLink}> Conctact Me </NavLink>

        <a className='navLink' href="https://www.bc.fi/?gclid=Cj0KCQjwmuiTBhDoARIsAPiv6L957izCclO7mHzuc9Q4NksNezhLDQ4OZ9Xqjn5T-regQ-2zJDkA69UaAlLQEALw_wcB" target="blank" style={navBarStyles.navLink}> HBC </a>

      </div> 
    </div>
  )
}

export default Navbar;


/*
<section id="menuBar">
            <div id="logo">               
                <h1 id="v"> V</h1>
                <h1 id="g">G </h1>
            </div> 
            <nav>

                <button id="mobileButton"></button>
                
                <ul>
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="https://www.bc.fi/?sgclid=CjwKCAiAgbiQBhAHEiwAuQ6Bkr5THOt4DfqX4mz_e1O6WBURiBQcHFbgeelyfIXyITuybfpFCgFI6RoCjrEQAvD_BwE" target="blank">HBC</a></li>
                    <li><a href="#conctactSection">Conctact</a></li>
                </ul>

            </nav>

        </section>
*/