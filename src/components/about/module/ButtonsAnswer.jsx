

export const ButtonsAnswer = ({answer = [], onChange}) => {


        return (
                <div className="button_answers">
                        {
                                answer.map(({ title, description, key }, i) => (
                                        <div
                                                className="item_button_answers"
                                                onClick={()=>{onChange(key)}}
                                        >
                                                <span>{title}</span>
                                        </div>
                                ))
                        }
                </div>
        )
}