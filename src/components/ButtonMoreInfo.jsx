import { useNavigate } from "react-router-dom"
import { ScrollTop } from 'assets/func'

const ButtonMore = ({title='', link='/', className='', alt=-20}) => {
        const navigate = useNavigate()
        
        return(
                <button 
                        className={`button-more ${className}`}
                        onClick={() => {
                                navigate(link);
                                setTimeout(() => {
                                        ScrollTop(alt)
                                }, 0)
                        }}
                >
                        {title}
                </button>
        )
}

export {ButtonMore}