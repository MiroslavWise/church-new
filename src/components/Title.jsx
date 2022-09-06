import { useState, useEffect, useRef, useMemo } from "react"
import { useTranslation } from 'react-i18next';

const DARK_COLOR = '#31333b';
const LIGHT_COLOR = '#FFFFFF';

const Title = ({name, darkMode}) => {
        const {t} = useTranslation()
        const ref = useRef(null);
        // const isInViewport = useIsInViewport(ref);

        //${isInViewport && 'show-title'}

        return(
                <div className="title_block">
                        <div 
                                className={`title`} 
                                data-aos="fade-up" 
                                data-aos-duration="450" 
                                data-aos-offset="160" 
                                style={{color: darkMode ? DARK_COLOR : LIGHT_COLOR}}
                        >
                                {t(name)}
                        </div>
                        <div ref={ref} className="title_divider"></div>
                </div>
        )
}

// function useIsInViewport(ref) {
//         const [isIntersecting, setIsIntersecting] = useState(false);

//         const observer = useMemo(
//                 () =>
//                         new IntersectionObserver(([entry]) =>
//                         setIsIntersecting(entry.isIntersecting),
//                 ),
//                 [],
//         );

//         useEffect(() => {
//                         observer.observe(ref.current);
//                         return () => { observer.disconnect(); };
//                 }, 
//                 [ref, observer]
//         );

//         return isIntersecting;
// }

export {Title}