import YouTube from 'assets/svg/youTube.svg'
import Instagram from 'assets/svg/instagram.svg'
import { isMobile } from 'react-device-detect';

const SocialMedia = () => {

        return(
                <>
                        <a
                                href="https://www.youtube.com/channel/UCdkoS1EHOQDsUNsEjYEN-vA"
                                target="_blank"
                        >
                                <img 
                                        type="image/svg+xml" 
                                        src={YouTube} 
                                        width={isMobile ? 45 : 30} 
                                        height={isMobile ? 45 : 30}
                                        className='c-p item_social'
                                />
                        </a>
                        <a
                                href='https://instagram.com/_our_youth._?igshid=YmMyMTA2M2Y='
                                target="_blank"
                        >
                                <img 
                                        type="image/svg+xml"
                                        src={Instagram} 
                                        width={30} 
                                        height={30}
                                        className='c-p item_social'
                                />
                        </a>

                </>
        )
}

export {SocialMedia}