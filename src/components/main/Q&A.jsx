import { Title } from 'components'

const QA = () => {
        return(
                <div className="w-100 questions" id='main-questions'>
                        <dir className="block">
                                <dir className="block-content">
                                        <Title 
                                                name={'questions_answers'}
                                                darkMode={false}
                                        />
                                </dir>
                        </dir>
                </div>
        )
}

export {QA}