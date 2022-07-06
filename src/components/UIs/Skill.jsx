import React from 'react'

const barBorder = "black";
const barFill = "green";

function Skill({name, confidence}) {
  return (
    <div>
        <p>{name} {confidence}</p>
        <div class="progressBar"
          style={{
            borderRadius: 5,
            width: "70vw",
            border: `5px groove ${barBorder}`,
            backgroundColor: `${barBorder}`
          }}
        
        >
            <div class="fill" style={
                { 
                    height:24, 
                    width:`${confidence}`,
                    backgroundColor: `${barFill}`,
                    borderRadius: 5
                }}>
            </div>
        </div>
    </div>
  )
}

export default Skill