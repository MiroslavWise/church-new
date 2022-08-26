import { useNavigate, NavLink } from "react-router-dom"

const links = [
        {name: 'О нас', link: '/about'},
        {name: 'Встречи', link: '/meting'},
        {name: 'Учение', link: '/teaching'},
        {name: 'Что-то ещё, будет добавлено', link: '/'},
]

const Header = () => {
        const navigate = useNavigate()

        return(
                <div 
                        className="header bg-c-prime"
                >
                        <div className="logo-header c-p m-l-3" onClick={()=>{navigate('/')}}>
                                Logo
                        </div>
                        <div className="nav-header">
                                {
                                        links.map(({name, link}, i) => (
                                                <div className="item-nav-link" key={i}>
                                                        <div className="c-p text-nav" onClick={()=>{navigate(`${link}`)}}>{name}</div>
                                                        {
                                                                i !== links.length -1
                                                                &&
                                                                <div className="border-vertical m-2"></div>
                                                        }
                                                </div>
                                        ))
                                }
                        </div>
                        <div className="social-header">

                        </div>
                </div>
        )
}

export {Header}