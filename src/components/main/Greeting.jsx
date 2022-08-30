import { useState, useEffect } from "react"

const Greeting = () => {
        const [scale, setScale] = useState(false);

        useEffect(() => {
                setScale(true)
        }, [])
        return(
                <div className={`w-100 general ${scale && 'scale'}`}>
                        general
                </div>
        )
}

export {Greeting}