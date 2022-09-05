import { useState, useEffect } from 'react'
import axios from 'axios'

const VideosYouTube = () => {
        const [videos, setVideos] = useState([])
        
        useEffect(()=>{
                axios.get('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCdkoS1EHOQDsUNsEjYEN-vA&key=AIzaSyD2AbkjjreEOmhgOPQw7gYqNudBN7wy7GQ',)
                        .then(data => setVideos(data?.data?.items))
                        .catch(e => console.info('e: ', e))
        }, [])
        return(
                <>
                        <div className='youtube-grid'>
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
                </>
        )
}

export {VideosYouTube}