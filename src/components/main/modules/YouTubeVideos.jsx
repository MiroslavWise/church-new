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
        const [videoID, setVideoID] = useState('')



        useEffect(()=>{
                setVideos([
                        {
                                id:{
                                        videoId: 'CkO7lQDBS4U'
                                },
                                snippet:{
                                        thumbnails:{
                                                medium:{
                                                        url:'https://i.ytimg.com/vi/CkO7lQDBS4U/mqdefault.jpg'
                                                }
                                        },
                                        title: "aAAAAA"
                                }
                        },
                        {
                                id:{
                                        videoId: '7YX5mxxqrt8'
                                },
                                snippet:{
                                        thumbnails:{
                                                medium:{
                                                        url:'https://i.ytimg.com/vi/7YX5mxxqrt8/mqdefault.jpg'
                                                }
                                        },
                                        title: "aAAAAA"
                                }
                        },
                        {
                                id:{
                                        videoId: 'ShDjLyJdYVk'
                                },
                                snippet:{
                                        thumbnails:{
                                                medium:{
                                                        url:'https://i.ytimg.com/vi/ShDjLyJdYVk/mqdefault.jpg'
                                                }
                                        },
                                        title: "aAAAAA"
                                }
                        },
                ])
        }, [])

        const onChange = (linkID) => {
                setVideoID(linkID || '')
        }
        
        // useEffect(()=>{
        //         axios.get('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCdkoS1EHOQDsUNsEjYEN-vA&key=AIzaSyD2AbkjjreEOmhgOPQw7gYqNudBN7wy7GQ&maxHeight=4&maxResults=4&maxWidth=4',)
        //                 .then(data => setVideos(data?.data?.items))
        //                 .catch(e => console.info('e: ', e))
        // }, [])
        return(
                <div className='youtube-grid' data-aos="fade-up">
                        <div className={`you-0 w-100 h-100`}>
                                <iframe 
                                        width="100%" 
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${videoID || videos[0]?.id?.videoId}`}
                                        title="YouTube video player" 
                                        frameborder="0"
                                        onPlay={true}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                                        allowfullscreen
                                ></iframe>
                        </div>
                        {
                                videos.map((item, i) => {
                                        if(i>= 0 && i<= 2 ){
                                                return(
                                                <div className={`you-${i+1} w-100 h-100`}>
                                                        <img
                                                                alt={item?.snippet?.title}
                                                                src={`${item?.snippet?.thumbnails?.medium?.url}`}
                                                                height='100%'
                                                                width='100%'
                                                                className='c-p'
                                                                onClick={()=>{onChange(item?.id?.videoId)}}
                                                        />
                                                        {/* <iframe 
                                                                width="100%" 
                                                                height="100%"
                                                                src={`https://www.youtube.com/embed/${item?.id?.videoId}`}
                                                                title="YouTube video player" 
                                                                frameborder="0" 
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                                                                allowfullscreen
                                                        ></iframe> */}
                                                </div>
                                                )
                                        }
                                })
                        }
                </div>
        )
}

export {VideosYouTube}