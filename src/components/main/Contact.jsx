import { Title, ButtonMore } from 'components'
import { contacts } from './modules/ArrayBlocks'
import AOS from 'aos'

const Contact = () => {

        AOS.init({
                offset: 60,
                delay: 200,
                duration: 300,
                easing: 'ease-in-out',
        })

        return(
                <div className="w-100 contact" id='main-contact'>
                        <div className="block">
                                <div className="block-content">
                                        <Title 
                                                name={'contact'}
                                                darkMode={false}
                                        />
                                        <div className="contact-items contact-items-grid">
                                                {
                                                        contacts.map(({text, logo, link})=> (
                                                                <div className={`contact-item c-p`} data-aos="zoom-in" key={text} >
                                                                        <div>
                                                                                <img src={logo} alt="logos" className="contact-item-logo" />
                                                                        </div>
                                                                        <div> {text}</div>
                                                                </div>
                                                        ))
                                                }
                                        </div>
                                        <div className="button-more-wrapper">
                                                <ButtonMore
                                                        className='button-n-hover'
                                                        title={'Подробные контакты'}
                                                />
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export {Contact}