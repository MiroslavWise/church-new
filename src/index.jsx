import React, { useState } from 'react'
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


const Routing = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [infoModal, setInfoModal] = useState({
        title: 'sadfad',
        description: 'asdfasdfs'
    })

    const modalShow = {
        setModalVisible,
        setInfoModal
    }

    
    console.log('ModalContext: ', ModalContext)

    return(
        <ModalContext.Provider value={modalShow}>
            <BrowserRouter>
                <Header />
                    <div className='index-layout' onClick={()=>setModalVisible(false)}>
                        <Routes>
                            <Route path="/" element={<Main />} index/>
                            {
                                maps
                            }
                        </Routes>
                    </div>
                <Footer />
            <div className={`modal-meeting ${modalVisible && "modal-visible"}`} onClick={()=>setModalVisible(false)}>
                <div>{infoModal.title}</div>
                <div>{infoModal.description}</div>
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