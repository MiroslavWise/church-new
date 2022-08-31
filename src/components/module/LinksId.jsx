import { useNavigate } from 'react-router-dom'

import {ScrollInfoBottom} from 'assets/func'

const links = [
        {name: 'О нас', link: 'about'},
        {name: 'Встречи', link: 'meeting'},
        {name: 'Учение', link: 'teaching'},
        {name: 'Вопросы и ответы', link: 'questions'},
        {name: 'Мероприятия', link: 'events'},
        {name: 'Поддержка', link: 'support'},
        {name: 'Контакты', link: 'contact'},
]

const LinksId = () => {
        const navigate = useNavigate()

        return(
                <div className="nav-header">
                        {
                                links.map(({name, link}, i) => (
                                        <div className="item-nav-link" key={link}>
                                                <div className="c-p text-nav" onClick={()=>{navigate('/')}}>
                                                        <ScrollInfoBottom link={link} str={name.toUpperCase()}/>
                                                </div>
                                                {
                                                        i !== links.length -1
                                                        &&
                                                        <div className="border-vertical m-3"></div>
                                                }
                                        </div>
                                ))
                        }
                </div>
        )
}

export {LinksId}