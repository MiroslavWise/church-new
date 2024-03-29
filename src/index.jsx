import React, { useState, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import AOS from 'aos'
import smoothscroll from 'smoothscroll-polyfill';

import './style/index.scss';
// import 'aos/dist/aos.css'
import 'shared/translation/i18n'

import { Header, Footer } from 'components'
import { Main } from 'page'
import { maps } from 'routes/mapping'
import { ModalMeeting } from 'components/module/ModalMeeting'

import { links } from 'components/module/LinksId'
window.__forceSmoothScrollPolyfill__ = true;
smoothscroll.polyfill()
let BehaviorLinks;



const ModalContext = React.createContext('Function')

const Routing = () => {
    // AOS.init({
    //     offset: 30,
    //     delay: 50,
    //     duration: 300,
    //     easing: 'ease-in-out',
    // })

    useLayoutEffect(() => {
        BehaviorLinks = links.map(({ link }) => (
            document?.getElementById(`t${link}`).addEventListener('click', () => {
                requestAnimationFrame(
                    window?.scroll({ top: document?.getElementById(`main-${link}`)?.offsetTop - 59, behavior: 'smooth' })
                )
            })
        ))
    })

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
                                maps()
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