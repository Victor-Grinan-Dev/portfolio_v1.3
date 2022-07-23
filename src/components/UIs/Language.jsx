import React from 'react'

function Language({name, stars, logo}) {

    const starsHandler = (starsNum) => {
        const star = "⭐"
        let phrase = "";
        for(let i = 0; i < starsNum; i ++){
            if (i === starsNum - 1){
                phrase += star;
            }else{
                phrase += star + " ";
            }
        }
        return phrase;
    }

  return (
    <div>
        {logo?<img className="langLogo" src={logo} alt={name} />:<div className="langLogo" ></div>  }
        <p>{name}</p>
        <div className="stars">

            <p>{starsHandler(stars)}</p>
        </div>
    </div>
  )
}

export default Language