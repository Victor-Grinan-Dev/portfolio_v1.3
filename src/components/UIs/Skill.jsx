import React from 'react'

const barBorder = "black";

const barFill = (percent) => {

  const over_75 = "green";
  const under_75 = "yellow"
  const under_50 = "orange";
  const under_25 = "red"
  
  if ( percent < 25 ){
    return under_25;
  }else if ( percent < 50 ){
    return under_50;
  }else if ( percent < 75 ){
    return under_75;
  }else{
    return over_75;
  }
}

function Skill({name, confidence}) {
  return (
    <div style={{
      margin:"10px"
    }}
    >
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
                    backgroundColor: `${barFill(confidence)}`,
                    borderRadius: 10
                }}>
            </div>
        </div>
    </div>
  )
}

export default Skill