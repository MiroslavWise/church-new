import {useContext} from 'react'
import ModalContext from 'index'
import { Title } from 'components'
import { MeetingBoxes } from './modules/MeetingBoxes'

const Meeting = () => {
        
        const setUpdateModal = useContext(ModalContext)

        const onChange = () => {
                setUpdateModal.setModalVisible(true)
                setUpdateModal.setInfoModal({
                        title: 'Воскресные собрания', 
                        description:
                                <>
                                        Мы встречаемся каждое воскресенье в 10:00 и 17:00. Библейское учение, молитва, пение и участие в Вечере Господней –
                                        неотъемлемые части наших воскресных собраний. Воскресные встречи открыты для всех заинтересованных людей –
                                        не только членов нашей Церкви. Приходите и познакомьтесь с нами! Если вы не можете быть с нами «вживую», мы
                                        приглашаем вас посмотреть онлайн-трансляции наших собраний
                                        через <a style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }} href="https://www.youtube.com/channel/UCdkoS1EHOQDsUNsEjYEN-vA" target="_blank">YouTube</a>.
                                </>
                })
        }

        return(
                <div
                        className="w-100 meeting"
                        id="main-meeting"
                >
                        <div className="w-100">
                                <div className="block-content">
                                        <Title 
                                                name={'meetings'}
                                        />
                                        <div className="meeting-flex">
                                                <div class="sunday-service c-p" onClick={(e) => { onChange(); e.stopPropagation() }}
                                                >
                                                        <div className="centered">Воскресные собрания</div>
                                                </div>
                                                <MeetingBoxes />
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export {Meeting}