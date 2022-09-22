export const ButtonAboutScrollPage = ({ name, link}) => {

        return (
                <a href={`#a-${link}`} id={`t${link}`}>
                        <div className='link_about'>
                                <span>{ name}</span>
                        </div>
                </a>
        )
}
