import React from 'react'

function ScroolUp() {
    window.onscroll = () => scrollFunction();

    function scrollFunction() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            menuBar.classList.add("scrollUp");
            upButton.classList.remove("invisible");
            mobButton.classList.remove("scrollUp");
            
        } else {  
            menuBar.classList.remove("scrollUp"); 
            upButton.classList.add("invisible"); 
            mobButton.classList.add("scrollUp");   
        }
      }

      const pageTop = () => {

        window.scroll({
          top: 0,  
          behavior: 'smooth' 
        });
    }

    const scrollToSmoothly = (pos, time) => {
        const currentPos = window.pageYOffset;
        const start = null;
        time == null ? time = 500: null;
        pos = + pos;
        time = + time;
        window.requestAnimationFrame(function step(currentTime) {
            start = !start ? currentTime : start;
            var progress = currentTime - start;
                if (currentPos < pos) {
                    window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
                } else {
                    window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
                }
                if (progress < time) {
                    window.requestAnimationFrame(step);
                } else {
                    window.scrollTo(0, pos);
                }
        });
    }
    
  return (
    <div>
       <button id="up" className="invisible">up</button>
    </div>
  )
}
    
export default ScroolUp;