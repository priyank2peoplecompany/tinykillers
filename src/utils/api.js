import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.tinykillers.com/api/',
});

export default api;
