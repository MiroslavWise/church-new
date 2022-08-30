import { useState, useEffect } from "react"

const General = () => {
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

export {General}