import {ButtonAboutScrollPage} from './module/ButtonAboutScrollPage'
export const aboutLinks = [
        {name: 'Пастора', link: '',},
        {name: 'Наша вера', link: 'faith',},
        {name: 'Наша цель', link: '',},
        {name: 'История', link: '',}
]

export const AboutLinks = () => {
        

        return (
                <div className="about_links_container">
                        <div className='block-content_'>
                                <h6>
                                        У вас, наверное, много вопросов о том, кто мы такие. Мы надеемся, что
                                        следующая информация ответит хотя бы на часть из них.
                                </h6>
                                <div className="about_links">
                                        {
                                                aboutLinks.map(({ name, link }) => (
                                                        <ButtonAboutScrollPage {...{name, link}} />
                                                ))
                                        }
                                </div>
                        </div>
                </div>
        )
}