import { Title } from 'components'

const Teaching = () => {
        return(
                <div className="w-100 teaching" id='main-teaching'>
                        <dir className="block">
                                <dir className="block-content">
                                        <Title 
                                                name={'teaching'}
                                                darkMode
                                        />
                                </dir>
                        </dir>
                </div>
        )
}

export {Teaching}