import { Title } from 'components'

const Events = () => {
        return(
                <div className="w-100 events" id='main-events'>
                        <div className="block w-100">
                                <div className="block-content">
                                        <Title 
                                                name={'events'}
                                                darkMode
                                        />
                                </div>
                        </div>
                </div>
        )
}

export {Events}