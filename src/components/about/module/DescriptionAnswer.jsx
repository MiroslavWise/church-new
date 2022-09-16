import AOS from 'aos'

export const DescriptionAnswer = ({descriptionText}) => {
        return(
                <div className={`description_text`} data-aos="zoom-in">
                        <span>{descriptionText}</span>
                </div>
        )
}