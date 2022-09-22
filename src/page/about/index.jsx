import { useState, useEffect, useLayoutEffect } from 'react'
import { ButtonMore } from 'components'
import { AboutLinks, Pastors, SmallInfo, Faith } from 'components/about'
import {aboutLinks} from 'components/about/AboutLinks'

let BehaviorLinks;



const About = () => {
        const [visibility, setVisibility] = useState(false)

        useLayoutEffect(() => {
                BehaviorLinks =aboutLinks.map(({ link }) => (
                        document?.getElementById(`t${link}`)?.addEventListener('click', () => {
                                window?.scroll({ top: document?.getElementById(`a-${link}`).offsetTop - 59, behavior: 'smooth' });
                        })
                ))
        }, [])

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
                        <Pastors />
                        <Faith />
                </div>
        )
}

export default About