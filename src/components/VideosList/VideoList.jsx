import React from 'react';
import VideoItem from "../VideoItem/VideoItem";
import './VideoList.scss'

const VideoList = ({videoList, setVideo}) => {

    return (
        <div className='video-list col-4'>
            {videoList ? videoList.map((item, index) => {
                return <VideoItem key={index}
                                  video={item}
                                  setVideo={setVideo}
                />
            })
            : <h3>The playlist will be displayed here!</h3>
            }
        </div>
    );
};

export default VideoList;