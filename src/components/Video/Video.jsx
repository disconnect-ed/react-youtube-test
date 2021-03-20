import React from 'react';

const Video = ({video}) => {

    return (
        <div className='video col-8'>
            {video ?
                <>
                    <iframe height='380px'
                            width="90%"
                            src={`https://www.youtube.com/embed/${video.id.videoId || video.id}`}
                            allowFullScreen title="Video player"/>
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </>
                :
                <h3>Video will be displayed here!</h3>
            }
        </div>
    );
};

export default Video;