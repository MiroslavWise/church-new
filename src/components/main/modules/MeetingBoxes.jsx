import {useContext} from 'react'
import ModalContext from 'index'
import {ItemsMeeting} from './ArrayBlocks'

const MeetingBoxes = ({}) => {

        const setUpdateModal = useContext(ModalContext)

        console.log(setUpdateModal)

        const onChange = (title, description) => {
                setUpdateModal.setModalVisible(true)
                setUpdateModal.setInfoModal({title, description})

        }

        return(
                <div className="meeting-items-grid">
                        {
                                ItemsMeeting.map(({title, description}, i)=> (
                                        <div className={`item-meeting c-p item-${i+1}`} key={title} onClick={(e)=> {onChange(title, description); e.stopPropagation() }}>
                                                <div className="centered">
                                                        {title}
                                                </div>
                                        </div>
                                ))
                        }
                </div>
        )
}

export {MeetingBoxes}