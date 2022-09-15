import { useState, useEffect } from 'react'
import { ButtonMore } from 'components'
import { AboutLinks } from 'components/about/AboutLinks'
import {SmallInfo} from 'components/about/SmallInfo'



const About = () => {
        const [visibility, setVisibility] = useState(false)
        useEffect(() => {
                setVisibility(true)
        }, [])
        return (
                <div className={`about_container not_visible ${visibility && "visible"}`}>
                        <div className='bg_about_page_title about_main_image'>
                                <h1 className="h1-about _h1">О нас</h1>
                        </div>
                        <AboutLinks />
                        <SmallInfo />
                </div>
        )
}

export default About