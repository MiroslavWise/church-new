import moment from 'moment/moment'
import {SocialMedia} from './module/SocialMedia'

const Footer = () => {

        return(
                <div className="footer">
                        <div className="footer-inner">
                                <div className="footer-name m-l-1">
                                        © {moment().format('YYYY')} Церковь Слово Жизни г. Столин
                                </div>
                                <div className="footer-social">
                                        <SocialMedia />
                                </div>
                        </div>
                </div>
        )
}

export {Footer}