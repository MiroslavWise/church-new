import { Title } from 'components'
import { Accordion } from './modules/Accordion'

const QA = () => {
        return(
                <div className="w-100 questions b-d-f-c" id='main-questions'>
                        <div className="block w-100">
                                <div className="block-content">
                                        <Title 
                                                name={'questions_answers'}
                                                darkMode={false}
                                        />
                                        <p className='color-w-g' style={{fontSize: 18, fontWeight: 200}}>Не все так однозначно? Мы понимаем это, поэтому подготовили ответы на часто задаваемые вопросы.</p>
                                        <Accordion />
                                </div>
                        </div>
                </div>
        )
}

export {QA}