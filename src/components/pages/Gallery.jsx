import React from 'react'

function Gallery() {
    
    const totalPics = 7;
    
    const selected = [];
    
    const randomIndex = (array) => Math.floor((Math.random() * array.length) + 1);
    const selectOneRandomPic = (array) => {
        const result = array[randomIndex(array)];
        console.log(result)
        return result
    }
    
    const displayImg = () => {
    
        //...
    
    }
    
    displayImg();

  return (
    <div>
        Gallery
        <div id="gallery" className='gallery'>
                <div id="pic_1" className="arte">pic_1</div>
                <div id="pic_2" className="arte">pic_2</div>
                <div id="pic_3" className="arte">pic_3</div>
                <div id="pic_4" className="arte">pic_4</div>
                <div id="pic_5" className="arte">pic_5</div>
                <div id="pic_6" className="arte">pic_6</div>
                <div id="pic_7" className="arte">pic_7</div>
            </div>
            <p> Reload the page for more pics</p>
    </div>
  )
}

export default Gallery