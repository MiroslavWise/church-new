import {useState} from 'react'

import {MainLogo} from './module/MainLogo'
import {LinksId} from './module/LinksId'
import {SocialMedia} from './module/SocialMedia'



const Header = () => {
        const [scroll, setScroll] = useState(0);
        window.addEventListener("scroll", ()=>{
                setScroll(window.scrollY)
        })

        return(
                <div className={`header ${scroll ? 'bg-c-prime' : 'bg-c-transparent'}`}>
                        <MainLogo />
                        <LinksId />
                        <div className="social-header m-r-8">
                                <SocialMedia />
                        </div>
                </div>
        )
}

export {Header}