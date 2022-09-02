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
import {ModalMeeting} from 'components/module/ModalMeeting'

const ModalContext = React.createContext('Function')

window.document.getElementsByTagName('body')[0].scrollIntoView({behavior:'smooth'})

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
            <ModalMeeting  {...{modalVisible, infoModal, setModalVisible}}/>
            </BrowserRouter>
        </ModalContext.Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
        <Routing />
)

export default ModalContext