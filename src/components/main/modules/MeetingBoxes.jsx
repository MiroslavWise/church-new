import {useContext} from 'react'
import ModalContext from 'index'

const ItemsMeeting = [
        {
                title: 'Домашние группы', 
                description:'Мы практикуем близкие отношения в малых группах, где мы молимся, читаем Библию и - многими другими способами - поддерживаем друг друга в следовании за Христом в нашей повседневной жизни. Малые группы - это безопасное и гостеприимное место для каждого.',
        },
        {
                title: 'Сестринские группы', 
                description: '',
        },
        {
                title: 'Молодежный клуб', 
                description: 'Собрания молодежной группы - это уникальное пространство, где подростки могут узнать о Божьем Слове и Его Авторе, ободрить друг друга, построить ценные отношения со сверстниками и провести время за разнообразными занятиями. Воодушевлен? Приглашаем всех возрастов 13-20 лет присоединиться к нам в церковном здании каждую субботу в 6.59 вечера.',
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