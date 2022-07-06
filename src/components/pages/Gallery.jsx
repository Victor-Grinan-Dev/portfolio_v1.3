import React from 'react'
import picBank from './dummy_galleryPics';
function Gallery() {
    
    const totalPics = 7;
    
    const selected = [];
    
    const randomIndex = (array) => Math.floor((Math.random() * array.length) + 1);
    const selectOneRandomPic = (array) => {
        const result = array[randomIndex(array)];
        console.log(result)
        return result
    }
    let pic_1;
    let pic_2;
    let pic_3;
    let pic_4;
    let pic_5;
    let pic_6;
    let pic_7;

    const allPics = [
        pic_1,
        pic_2,
        pic_3,
        pic_4,
        pic_5,
        pic_6,
        pic_7
    ]

    const displayImg = () => {
        allPics.map(pic =>(
            pic = randomIndex(picBank)
        ))
    }
    
    displayImg();

  return (
    <div className='page'>
        <div className="content">
        Gallery
        <div id="gallery" className='gallery'>
                <div id="pic_1" className="arte">{pic_1}</div>
                <div id="pic_2" className="arte">{pic_2}</div>
                <div id="pic_3" className="arte">{pic_3}</div>
                <div id="pic_4" className="arte">{pic_4}</div>
                <div id="pic_5" className="arte">{pic_5}</div>
                <div id="pic_6" className="arte">{pic_6}</div>
                <div id="pic_7" className="arte">{pic_7}</div>
            </div>
            <p> Reload the page for more pics</p>
        </div>
    </div>
  )
}

export default Gallery;