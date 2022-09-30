const Arrow = () => {
    return(
        <div id="arrowAnim" className={`show-array`}>
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
    )
}

export {Arrow}