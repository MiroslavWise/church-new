import { useState, useEffect } from 'react'

const Arrow = () => {
    
    const [scrolled, setScrolled] = useState(false);

    let count = 0;
    const handleScroll = () => {
        if (count > 2) {
            setScrolled(true);
            window.removeEventListener("scroll", handleScroll);
        }
        count++;
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []) 

    return(
        <>
        <div id="arrowAnim" className={`show-array ${scrolled && 'hide_arrow'}`}>
            <div className="arrowSliding">
                <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay1">
                <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay2">
                <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay3">
                <div className="arrow"></div>
            </div>
            
        </div>

        </>
    )
}

export {Arrow}