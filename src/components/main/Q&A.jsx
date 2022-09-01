import { Title } from 'components'

const QA = () => {
        return(
                <div className="w-100 questions" id='main-questions'>
                        <div className="block">
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