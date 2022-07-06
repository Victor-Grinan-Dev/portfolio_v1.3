import React from 'react'

const barBorder = "black";
const barFill = "green";

function Skill({name, confidence}) {
  return (
    <div>
        <p>{name} {confidence}</p>
        <div className="progressBar"
          style={{
            borderRadius: 10,
            width: "70vw",
            border: `5px groove ${barBorder}`,
            backgroundColor: `${barBorder}`
          }}
        >
            <div className="fill" style={
                { 
                    height:24, 
                    width:`${confidence}`,
                    backgroundColor: `${barFill}`,
                    borderRadius: 10
                }}>
            </div>
        </div>
    </div>
  )
}

export default Skill