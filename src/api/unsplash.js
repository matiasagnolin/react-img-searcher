import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID Y3-_dOEBVg2DiwKKWKC1LXKdWgL7v21yM5c5cGZBQFo'
    }
});