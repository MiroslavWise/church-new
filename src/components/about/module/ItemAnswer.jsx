

export const  ItemAnswer  = ({ onChange, item, keyItem }) => {
        console.log(item.key === keyItem)
        return (
                <div
                        className={`item_button_answers ${item.key === keyItem && 'active'}`}
                        onClick={() => { onChange(item.key) }}
                        key={item.key}
                >
                        <span>{item.title}</span>
                </div>
        )
}