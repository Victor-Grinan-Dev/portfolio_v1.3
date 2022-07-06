
import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contacts from './components/pages/Contacts';
import Browse from './components/pages/Browse';
import SingleProject from './components/pages/SingleProject';
import About from './components/pages/About';
import Navbar from './components/UIs/Navbar';
import AddCard from './components/pages/AddCard';
import Gallery from './components/pages/Gallery';
import Footer from './components/UIs/Footer';
import Skills from './components/pages/Skills';
import { useState } from 'react';
import Projects from './components/pages/Projects';

import "./components/styles/mainStyle.css"

//import { getAnalytics } from "firebase/analytics";

/*********************  styles  ************************/
/*
import './components/styles/navBar.css';
import './components/styles/card.css';
import './components/styles/about.css';
import './components/styles/addCard.css';
import './components/styles/browse.css';
import './components/styles/singleProduct.css';
import './components/styles/home.css';
import './components/styles/contacts.css';
*/
//import './components/styles/gallery.css'
//import './components/styles/login_signup.css';

const App = () => {
  const [entered, setEntered] = useState(false);

  const enter = () => {
    console.log("started")
    setEntered(true);
  }

  if(!entered){
    return (
      <BrowserRouter>
      <Routes>   
        <Route path="/" element={<Home getIn={enter} />} />
      </Routes>
    </BrowserRouter>
    )
  }else{
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>   
          <Route path="/" element={ <About />} />
          <Route path="about" element={<About />} />
          <Route path="browse" element={<Browse />} />
          <Route path="skills" element={<Skills />} />
          <Route path="add" element={<AddCard />} />
          <Route path="contacts" element={<Contacts />} />
          {/*<Route path="browse/:single" element={<SingleProject />} />*/} 
          <Route path="projects/:single" element={<SingleProject />} /> 
          <Route path="gallery" element={<Gallery />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
};

export default App;
