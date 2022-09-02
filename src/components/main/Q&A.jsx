import { Title } from 'components'

const QA = () => {
        return(
                <div className="w-100 questions b-d-f-c" id='main-questions'>
                        <div className="block w-100">
                                <div className="block-content">
                                        <Title 
                                                name={'questions_answers'}
                                                darkMode={false}
                                        />
                                </div>
                        </div>
                </div>
        )
}

export {QA}