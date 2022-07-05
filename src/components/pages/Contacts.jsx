import React from 'react';
import Email from './Email';
import conctacts from './dummy_conctacts';
import Conctact from '../UIs/Conctact';

function Conctacts() {
  return (
    <div className='contacts'>
      <header>
        <h1> Conctacts: </h1>
        <p>We are in: </p>
        <ul>

            {conctacts.map(item => (
              <li>  
                  <Conctact 
                  key={item.id} 
                  id={item.id}
                  name={item.name}
                  url={item.url}
                  />
              </li>
            ))}


        </ul>

      </header>
      <h3> Or just sent email to us: </h3>
      <Email />
    </div>
  )
}

export default Conctacts