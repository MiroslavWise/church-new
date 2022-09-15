export const ButtonAboutScrollPage = ({ name, link}) => {

        return (
                 <a href={`#-${link}`} >
                        <div className='link_about'>
                                <span>{ name}</span>
                        </div>
                </a>
        )
}