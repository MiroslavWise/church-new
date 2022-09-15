import {useContext} from 'react'
import ModalContext from 'index'
import { Title } from 'components'
import { MeetingBoxes } from './modules/MeetingBoxes'

const Meeting = () => {
        
        const setUpdateModal = useContext(ModalContext)

        const onChange = () => {
                setUpdateModal.setModalVisible(true)
                setUpdateModal.setInfoModal({title: 'Воскресные собрания', description: ''})

        }

        return(
                <div
                        className="w-100 meeting b-d-f-c"
                        id="main-meeting"
                >
                        <div className="block">
                                <div className="block-content">
                                        <Title 
                                                name={'meetings'}
                                        />
                                        <div className="meeting-flex">
                                                <div class="sunday-service c-p" onClick={(e)=> {onChange(); e.stopPropagation() }} data-aos="fade-right" data-aos-duration="400">
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