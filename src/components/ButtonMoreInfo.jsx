

const ButtonMore = ({title, link, className=''}) => {

        return(
                <button className={`button-more ${className}`}>
                        {title}
                </button>
        )
}

export {ButtonMore}