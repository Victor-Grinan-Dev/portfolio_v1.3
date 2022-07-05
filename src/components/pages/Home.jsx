import React from 'react';

function Home({getIn}) {
  return (
    <div className= "homeBox" >
        <div className="videoContainer" >
            <p className="slogan"> Hi there! </p>
            <p className="slogan"> Im Victor Grinan </p>
            <p className="slogan"> welcome to my </p>
            <h1 className="title">"Portfolio"</h1>
            <button onClick={getIn} > Let's get started </button>
        </div>
    </div>
  )
}

export default Home;

/*
<video
                autoPlay
                muted
                loop
                className="video"
                src={video}
                type='video/mp4'
            />
*/