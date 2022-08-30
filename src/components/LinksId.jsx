import {ScrollInfoBottom} from 'assets/func'

const links = [
        {name: 'О нас', link: 'about'},
        {name: 'Встречи', link: 'meting'},
        {name: 'Учение', link: 'teaching'},
        {name: 'Вопросы и ответы', link: 'questions'},
        {name: 'Мероприятия', link: 'events'},
        {name: 'Поддержка', link: 'support'},
        {name: 'Контакты', link: 'contact'},
]

const LinksId = () => {

        return(
                links.map(({name, link}, i) => (
                        <div className="item-nav-link" key={i}>
                                <div className="c-p text-nav"><ScrollInfoBottom link={link} str={name}/></div>
                                {
                                        i !== links.length -1
                                        &&
                                        <div className="border-vertical m-2"></div>
                                }
                        </div>
                ))
        )
}

export {LinksId}