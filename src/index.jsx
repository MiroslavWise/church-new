import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './style/index.scss';
import 'aos/dist/aos.css'
import 'shared/translation/i18n'

import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Main } from 'page'
import { maps } from 'routes/mapping'

const ModalContext = React.createContext('Function')

function desc (text) {
    return(
            <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h4 >{text}</h4>
            </div>
    )
}


const Routing = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [infoModal, setInfoModal] = useState({
        title: '',
        description: ''
    })

    const modalShow = {
        setModalVisible,
        setInfoModal
    }
    

    return(
        <ModalContext.Provider value={modalShow}>
            <BrowserRouter>
                <Header />
                    <div className='index-layout'>
                        <Routes>
                            <Route path="/" element={<Main />} index/>
                            {
                                maps
                            }
                        </Routes>
                    </div>
                <Footer />
            <div className={`${modalVisible && 'dimming'}`} onClick={()=>setModalVisible(false)} id='dimming'>
                <div className={`modal-meeting ${modalVisible && "modal-visible"}`}>
                    <div className='modal-title'><h2>{infoModal.title}</h2></div>
                    <div className='modal-description'>{desc(infoModal.description)}</div>
                </div>
            </div>
            </BrowserRouter>
        </ModalContext.Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    
        <Routing />
)

export default ModalContext