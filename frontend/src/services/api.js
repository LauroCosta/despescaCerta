import axios from 'axios';

const api = axios.create({

    baseURL: "http://34.239.135.40:3000"

});

export default api;