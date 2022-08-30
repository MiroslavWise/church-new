import { useNavigate } from "react-router-dom"

import {SocialMedia} from './SocialMedia'
import {LinksId} from './LinksId'

import logo from 'assets/png/bible-quran-64.png'

const links = [
        {name: 'О нас', link: 'about'},
        {name: 'Встречи', link: 'meting'},
        {name: 'Учение', link: 'teaching'},
        {name: 'Вопросы и ответы', link: 'questions'},
        {name: 'Мероприятия', link: 'events'},
        {name: 'Поддержка', link: 'support'},
        {name: 'Контакты', link: 'contact'},
]

const Header = () => {
        const navigate = useNavigate()

        return(
                <div className={`header bg-c-prime`}>
                        <div className="logo-header c-p m-l-8" onClick={()=>{navigate('/')}}>
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