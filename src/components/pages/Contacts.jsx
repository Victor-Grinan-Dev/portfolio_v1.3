import React from 'react';
import Email from '../UIs/Email';
import conctacts from './dummy_conctacts';
import Conctact from '../UIs/Conctact';

function Conctacts() {
  return (
    <div className='page'>
      <div className="content">
        <header>
          <h1> Conctacts: </h1>
          <p>We are in: </p>
          <ul>
              {conctacts.map(item => (
                <li key={item.id} >  
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
      <Email key={"email"} />
    </div>
  </div>
      
  )
}

export default Conctacts