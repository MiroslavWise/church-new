import { useState, useEffect } from 'react'
import AOS from 'aos'
import axios from 'axios'

const VideosYouTube = () => {
        AOS.init({
                offset: 120,
                delay: 0,
                duration: 600,
                easing: 'ease-in-out',
        })
        const [videos, setVideos] = useState([])
        
        useEffect(()=>{
                axios.get('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCdkoS1EHOQDsUNsEjYEN-vA&key=AIzaSyD2AbkjjreEOmhgOPQw7gYqNudBN7wy7GQ',)
                        .then(data => setVideos(data?.data?.items))
                        .catch(e => console.info('e: ', e))
        }, [])
        return(
                <div className='youtube-grid' data-aos="fade-up">
                        {
                                videos.map((item, i) => {
                                        if(i>= 0 && i<= 3 ){
                                                return(
                                                <div className={`you-${i} w-100 h-100`}>
                                                        <iframe 
                                                                width="100%" 
                                                                height="100%"
                                                                src={`https://www.youtube.com/embed/${item?.id?.videoId}`}
                                                                title="YouTube video player" 
                                                                frameborder="0" 
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                                                                allowfullscreen
                                                        ></iframe>
                                                </div>
                                                )
                                        }
                                })
                        }
                </div>
        )
}

export {VideosYouTube}