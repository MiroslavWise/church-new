import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import {ScrollInfoBottom} from 'assets/func'

const links = [
        {name: 'about_us', link: 'about'},
        {name: 'meetings', link: 'meeting'},
        {name: 'video_stream', link: 'video_stream'},
        {name: 'questions_answers', link: 'questions'},
        {name: 'events', link: 'events'},
        {name: 'pastor_blog', link: 'blog'},
        {name: 'support', link: 'support'},
        {name: 'contact', link: 'contact'},
]

const LinksId = () => {
        const {t} = useTranslation()
        const navigate = useNavigate()

        return(
                <div className="nav-header">
                        {
                                links.map(({name, link}, i) => (
                                        <div className="item-nav-link" key={link}>
                                                <div className="c-p text-nav" onClick={()=>{navigate('/')}}>
                                                        <ScrollInfoBottom link={link} str={t(name).toUpperCase()}/>
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