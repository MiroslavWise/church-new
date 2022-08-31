import { useNavigate } from "react-router-dom"

const ButtonMore = ({title, link='/', className=''}) => {
        const navigate = useNavigate()

        return(
                <button 
                        className={`button-more ${className}`}
                        onClick={()=>{navigate(link)}}
                >
                        {title}
                </button>
        )
}

export {ButtonMore}