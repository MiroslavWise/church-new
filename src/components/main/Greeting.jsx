import { useState, useEffect } from "react"

const Greeting = () => {
        const [loaded, setScale] = useState(false);

        useEffect(() => {
                setScale(true)
        }, [])
        return(
                <div className="w-100 greeting">
                        <div className={`greeting-image ${loaded && 'scale'}`}></div>
                        <div className={`greeting-title1 m-t-20 p-t-12 m-b-1 p-b-1 ${loaded && 'show-opacity'}`}>Добро пожаловать</div>
                        <h2 className={`greeting-title2 ${loaded && 'show-opacity'}`}>Церковь ЕХБ «Слово Жизни» в Столине</h2>
                </div>
        )
}

export {Greeting}