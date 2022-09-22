import { useNavigate } from 'react-router-dom'

import logo from 'assets/svg/logo.svg'

import {ScrollTop} from 'assets/func'

const MainLogo = () => {
        const navigate = useNavigate()
        return(
                <div className="logo-header c-p m-l-8" onClick={()=>{navigate('/'); ScrollTop()}}>
                        <img src={logo} alt="logos" className="main_logo" />
                </div>
        )
}

export {MainLogo}