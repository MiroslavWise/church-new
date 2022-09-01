function desc (text) {
        return(
                <div style={{display: 'flex', flexDirection: 'column'}}>
                        <h4 >{text}</h4>
                </div>
        )
}

const ModalMeeting = ({modalVisible, infoModal, setModalVisible}) => (
        <div className={`${modalVisible && 'dimming'}`} onClick={()=>{setModalVisible(false)}} id='dimming'>
                <div className={`modal-meeting ${modalVisible && "modal-visible"}`} onClick={(e)=>{e.stopPropagation()}}>
                <div className='modal-title'><h2>{infoModal.title}</h2></div>
                <div className='modal-description'>{desc(infoModal.description)}</div>
                </div>
        </div>
)


export {ModalMeeting}