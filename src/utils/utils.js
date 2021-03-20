
export const getVideoId = (URL) => {
    debugger
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const videoId = URL.match(regExp);
    if(videoId != null) {
        return videoId[7]
    }
}