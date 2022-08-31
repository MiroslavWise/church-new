import AOS from 'aos'

const Title = ({name, color = 'c-black'}) => {
        AOS.init({
                offset: 120,
                duration: 400,
                easing: 'ease'
        })

        return(
                <div className="w-100">
                        <h2 className={`title-all-h2 ${color}`} data-aos="fade-up">
                                {name}
                        </h2>
                        <div className="title-bot-line"></div>
                </div>
        )
}

export {Title}