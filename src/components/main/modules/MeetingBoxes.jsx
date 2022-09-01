import {useContext} from 'react'
import ModalContext from 'index'

const ItemsMeeting = [
        {
                title: 'Домашние группы', 
                description: '',
        },
        {
                title: 'Сестринские группы', 
                description: '',
        },
        {
                title: 'Молодежный клуб', 
                description: '',
        },
        {
                title: 'Воскресная школа', 
                description: '',
        },
        {
                title: 'Лагеря', 
                description: '',
        },
        {
                title: 'Другие встречи', 
                description: '',
        },
]

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