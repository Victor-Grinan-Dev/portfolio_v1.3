import React from 'react';
import Email from './Email';

function Conctacts() {
  return (
    <div className='contacts'>
      <header>
        <h1> Conctacts: </h1>
        <p>We are in: </p>
        <ul>
          <a href="#" className='addCard'><li><p> instagram </p></li></a>
          <a href="#" className='addCard'><li><p> facebook </p> </li></a>
          <a href="#" className='addCard'><li><p> linkedin </p> </li></a>
          <a href="#" className='addCard'><li><p> github </p> </li></a>
          <a href="#" className='addCard'><li><p> youtube </p></li></a>
          <a href="#" className='addCard'><li><p> tik tok </p></li></a>
        </ul>

      </header>
      <h3> Or just sent email to us: </h3>
      <Email />
    </div>
  )
}

export default Conctacts