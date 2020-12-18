import axios from 'axios';

const KEY = 'AIzaSyCPKAGVC0xcM2O2mX2L7_BJmBQhXu2b4nU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});