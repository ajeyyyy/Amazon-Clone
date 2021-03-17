import axios from 'axios';

const instance = axios.create({
    // API URL(cloud function)
    baseURL: 'https://us-central1-copy-cf611.cloudfunctions.net/api',
    // 'http://localhost:5001/copy-cf611/us-central1/api'
});

export default instance;