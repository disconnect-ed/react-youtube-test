import axios from 'axios';
const KEY = 'AIzaSyBYsiDVYYoWQfjMzS6aP1zYVPh79PkupQs';

export const instance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/'
})

export const youtubeAPI = {
    getVideoList(search) {
        return instance.get(`/search?part=snippet&maxResults=5&q=${search}&key=${KEY}`)
    },
    getVideo(videoId) {
        return instance.get(`videos?part=snippet&id=${videoId}&key=${KEY}`)
    }
}