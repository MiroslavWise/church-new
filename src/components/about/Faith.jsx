import { Title } from 'components'
import { FaithAnswer } from './module/FaithAnswer'

export const Faith = () => {

        return (
                <div className="about_faith_container w-100" id="-faith">
                        <div className="block_content_about">
                                <Title className="about-title"
                                        name='во что мы верим'
                                />
                                <div className='text-p m-b-4 m-t-4'>   
                                        <p className='faith_items'>
                                                Мы черпаем нашу веру и наше учение из текста Библии, то есть Священного
                                                Писания Ветхого и Нового Заветов. Мы верим, что Библия — это Слово Божье,
                                                написанное по вдохновению Святого Духа и обладающее абсолютным
                                                авторитетом во всех вопросах веры и повседневной жизни.
                                        </p>
                                </div>
                                <FaithAnswer />
                        </div>
                </div>
        )
}