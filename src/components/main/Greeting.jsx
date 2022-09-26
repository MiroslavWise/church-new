import { useState, useEffect } from "react"
import { ButtonMore } from 'components'

const Greeting = () => {
        const [loaded, setScale] = useState(false);

        useEffect(() => {
                setScale(true)
        }, [])
        return(
                <div className="greeting">
                        <div className={`greeting-image ${loaded && 'scale'}`}>
                                        <div className={`greeting-title ${loaded && 'show-opacity'}`}>
                                        <h3 className={`greet-title-0 ${loaded && 'show-opacity'}`}>Верные Богу, служащие людям</h3>
                                        <h1 className={`greet-title-0 ${loaded && 'show-opacity'}`}>Добро пожаловать</h1>
                                        <h2 className={`greet-title-0 ${loaded && 'show-opacity'}`}>Церковь ЕХБ «Слово Жизни» в Столине</h2>
                                        <ButtonMore 
                                                className={`greet-button m-t-5 ${loaded && 'show-opacity'}`}
                                                title={'Важно знать'}
                                                link = {"/greeting"}
                                        />
                                </div>
                        </div>
                </div>
        )
}

export {Greeting}