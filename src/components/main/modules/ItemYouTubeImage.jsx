import {useState, useEffect} from 'react'

import YouTubeIconPlay from 'assets/svg/IkonPlayYouTube'

const ItemYouTubeImage = ({item, i, onChange, videoID}) => {
        const [visibleIcon, setVisibleIcon] = useState(false)
        const [playVisible, setPlayVisible] = useState(false)

        useEffect(() => {
                if(videoID === item?.id?.videoId){
                        return setPlayVisible(true)
                }
                setPlayVisible(false)
        }, [videoID])

        return(
                <div className={`you-${i} w-100 h-100`}>
                        <YouTubeIconPlay  {...{visibleIcon, playVisible}}/>
                        <img
                                alt={item?.snippet?.title}
                                src={`${item?.snippet?.thumbnails?.medium?.url}`}
                                height='100%'
                                width='100%'
                                className='c-p'
                                onClick={()=>{onChange(item?.id?.videoId)}}
                                onMouseOver={()=> {setVisibleIcon(true)}}
                                onMouseLeave={()=>{setVisibleIcon(false)}}
                        />
                </div>
        )
}

export {ItemYouTubeImage}