import { useState, useEffect, useRef, useMemo } from "react"
const DARK_COLOR = '#31333b';
const LIGHT_COLOR = '#FFFFFF';

const Title = ({name, darkMode}) => {

        console.log('Title darkMode',darkMode);
        const ref = useRef(null);
        const isInViewport = useIsInViewport(ref);

        return(
                <>
                
                        <div className={`title ${isInViewport && 'show-title'}`} style={{color: `${darkMode ? DARK_COLOR : LIGHT_COLOR}`}}>
                                {
                                        name
                                }
                        </div>
                        <div ref={ref} className="title_divider"></div>
                </>
        )
}

function useIsInViewport(ref) {
        const [isIntersecting, setIsIntersecting] = useState(false);

        const observer = useMemo(
                () =>
                new IntersectionObserver(([entry]) =>
                setIsIntersecting(entry.isIntersecting),
                ),
                [],
        );

        useEffect(() => {
                        observer.observe(ref.current);
                        return () => { observer.disconnect(); };
                }, 
                [ref, observer]
        );

        return isIntersecting;
}

export {Title}