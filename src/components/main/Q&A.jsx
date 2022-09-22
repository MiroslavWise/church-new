import { Title } from 'components'
import { Accordion } from './modules/Accordion'

const QA = () => {
        return(
                <div className="w-100 questions b-d-f-c" id='main-questions'>
                        <div className="block w-100">
                                <div className="block-content">
                                        <Title 
                                                name={'questions_answers'}
                                        />
                                        <div className='questions_description'>
                                                <p className='color-w-g' style={{fontSize: 16, fontWeight: 300}}>Не все так однозначно? Мы понимаем это, поэтому подготовили ответы на часто задаваемые вопросы.</p>
                                        </div>
                                        <Accordion />
                                </div>
                        </div>
                </div>
        )
}

export {QA}