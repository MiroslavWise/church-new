import { useState, useEffect } from 'react'
import axios from 'axios'

import {ItemYouTubeImage} from './ItemYouTubeImage'

const VideosYouTube = () => {
  
        const [videos, setVideos] = useState([])
        const [videoID, setVideoID] = useState('')

        

        // useEffect(()=>{
        //         setVideos([
        //                 {
        //                         id:{
        //                                 videoId: 'CkO7lQDBS4U'
        //                         },
        //                         snippet:{
        //                                 thumbnails:{
        //                                         medium:{
        //                                                 url:'https://i.ytimg.com/vi/CkO7lQDBS4U/mqdefault.jpg'
        //                                         }
        //                                 },
        //                                 title: "aAAAAA"
        //                         }
        //                 },
        //                 {
        //                         id:{
        //                                 videoId: '7YX5mxxqrt8'
        //                         },
        //                         snippet:{
        //                                 thumbnails:{
        //                                         medium:{
        //                                                 url:'https://i.ytimg.com/vi/7YX5mxxqrt8/mqdefault.jpg'
        //                                         }
        //                                 },
        //                                 title: "aAAAAA"
        //                         }
        //                 },
        //                 {
        //                         id:{
        //                                 videoId: 'ShDjLyJdYVk'
        //                         },
        //                         snippet:{
        //                                 thumbnails:{
        //                                         medium:{
        //                                                 url:'https://i.ytimg.com/vi/ShDjLyJdYVk/mqdefault.jpg'
        //                                         }
        //                                 },
        //                                 title: "aAAAAA"
        //                         }
        //                 },
        //         ])
        // }, [])

        const onChange = (linkID) => {
                setVideoID(linkID || '')
        }
        
        useEffect(()=>{
                axios.get('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCdkoS1EHOQDsUNsEjYEN-vA&key=AIzaSyD2AbkjjreEOmhgOPQw7gYqNudBN7wy7GQ&maxHeight=4&maxResults=4&maxWidth=4',)
                        .then(data => setVideos(data?.data?.items))
                        .catch(e => console.info('e: ', e))
        }, [])
        return(
                <div className='youtube-grid'
                >
                        <div className={`you-0`}>
                                <iframe 
                                        style={{
                                                width: '100%',
                                                height: '100%'
                                        }}
                                        src={`https://www.youtube.com/embed/${videoID || videos[0]?.id?.videoId}`}
                                        title="YouTube video player" 
                                        frameborder="0"
                                        onPlay
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                                        allowfullscreen
                                ></iframe>
                        </div>
                        {
                                videos.map((item, i) => {
                                        if(i>= 0 && i<= 2 ){
                                                return(
                                                        <ItemYouTubeImage {...{i: i+1, item, onChange, videoID}} key={item?.id?.videoId}/>
                                                )
                                        }
                                })
                        }
                </div>
        )
}

export {VideosYouTube}