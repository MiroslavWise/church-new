import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import {SocialMedia} from './module/SocialMedia'
import {LinksId} from './module/LinksId'

import {ScrollTop} from 'assets/func'

import logo from 'assets/png/bible-quran-64.png'

const Header = () => {
        const navigate = useNavigate()
        const [scroll, setScroll] = useState(0);
        window.addEventListener("scroll", ()=>{
                setScroll(window.scrollY)
        })

        console.log(scroll)

        return(
                <div className={`header ${scroll ? 'bg-c-prime' : 'bg-c-transparent'}`}>
                        <div className="logo-header c-p m-l-8" onClick={()=>{navigate('/'); ScrollTop()}}>
                                <img src={logo} alt="logos" className="main_logo" />
                        </div>
                        <div className="nav-header">
                                <LinksId />
                        </div>
                        <div className="social-header m-r-8">
                                <SocialMedia />
                        </div>
                </div>
        )
}

export {Header}