import { useState, useEffect, useRef, useMemo } from "react"

const Title = ({name}) => {

        const ref = useRef(null);
        const isInViewport = useIsInViewport(ref);

        return(
                <>
                        <div className={`title ${isInViewport && 'show-title'}`}>
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