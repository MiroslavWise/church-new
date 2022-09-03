import { Title, ButtonMore } from 'components'
import placeholder from 'assets/svg/placeholder.svg'
import phone from 'assets/svg/phone.svg'
import email from 'assets/svg/email.svg'
import clock from 'assets/svg/clock.svg'

const Contacts = [
        {
            text: 'г. Столин, \nул. Советская 94Б', 
            logo: placeholder,
        },
        {
            text: '+375(29) 201 62 38', 
            logo: phone,
        },
        {
            text: 'alsheuskivictor@gmail.com', 
            logo: email,
        },

        {
            text: 'Собрания: \nкаждое воскресени в 10:00 и 17:00', 
            logo: clock,
        }
]

const Contact = () => {
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
                                                    Contacts.map(({text, logo}, i)=> (
                                                            <div className={`contact-item c-p `} key={text}>
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