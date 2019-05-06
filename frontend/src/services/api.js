import axios from 'axios';

const api = axios.create({

    baseURL: "http://54.166.217.158:3000"

});

export default api;