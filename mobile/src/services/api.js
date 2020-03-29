import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.6:3333'  //usar ip do expo
});

export default api;