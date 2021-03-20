import React from "react";
import './App.scss';
import {youtubeAPI} from './api/youtube';
import Searchbar from "./components/Searchbar/Searchbar";
import {Container} from "react-bootstrap";
import Video from "./components/Video/Video";
import VideoList from "./components/VideosList/VideoList";
import {getVideoId} from "./utils/utils";

function App() {

    const [videoList, setVideoList] = React.useState(null)
    const [video, setVideo] = React.useState(null)

    const handleSubmit = async (e, state) => {
        debugger
        e.preventDefault()
        const isURL = state.includes('https://youtu')
            || state.includes('https://www.youtu')
        if (isURL) {
            const videoId = getVideoId(state)
            const response = await youtubeAPI.getVideo(videoId)
            setVideo(response.data.items[0])
            return
        }
        const response = await youtubeAPI.getVideoList(state)
        setVideoList(response.data.items)
        console.log("this is resp",response);
    };

    return (
        <div className="app">
            <Container>
                <Searchbar onSubmit={handleSubmit}/>
                <div className="row mt-4 position-relative">
                    <Video video={video}/>
                    <VideoList videoList={videoList}
                               setVideo={setVideo}
                    />
                </div>
            </Container>
        </div>
    );
}

export default App;
