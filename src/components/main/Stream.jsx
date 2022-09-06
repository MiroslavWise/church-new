import { Title } from 'components'
import {VideosYouTube} from './modules/YouTubeVideos'

import YouTubeLarge from 'assets/svg/YouTube_Logo_Large.jsx'

const Stream = () => {

        return(
                <div className="w-100 teaching b-d-f-c" id='main-video_stream'>
                        <div className="block w-100">
                                <div className="block-content">
                                        <Title 
                                                name={'video_stream'}
                                                darkMode
                                        />
                                        <div className="teaching-flex">
                                                <VideosYouTube />
                                                <div className='you-description' data-aos="fade-up" data-aos-duration="600">
                                                        <div>
                                                                <p>
                                                                На наших служениях мы стараемся преподавать Слово Божье таким образом, чтобы то, что мы проповедуем, созидало, ободряло, 
                                                                исправляло и приносило благословение тем, кто слушает.
                                                        </p>
                                                        <br />
                                                        <p>
                                                                Наши воскресные собрания транслируются на YouTube. Мы советуем вам посмотреть последнее богослужение. 
                                                                Чтобы быть в курсе последних событий, подпишитесь на наши каналы в социальных сетях. Если у вас есть вопросы, пожалуйста, 
                                                                свяжитесь со служением мультимедиа в нашей церкви. Мы сделаем все возможное, чтобы помочь.
                                                        </p>
                                                        </div>
                                                        
                                                <div className='description-youtube-instagram h-100 w-100'>
                                                        <YouTubeLarge />
                                                </div>
                                                </div>
                                                
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export {Stream}