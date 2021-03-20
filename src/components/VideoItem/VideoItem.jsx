import React from 'react';
import './VideoItem.scss'

const VideoItem = ({video , setVideo}) => {
    return (
        <div onClick={ () => setVideo(video)} className='video-item row'>
            <img className='video-item-img d-inline'
                 src={video.snippet.thumbnails.medium.url}
                 alt={video.snippet.description}/>
            <h6 className='video-item-title d-inline'>
                {video.snippet.title}
            </h6>
        </div>
    );
};

export default VideoItem;