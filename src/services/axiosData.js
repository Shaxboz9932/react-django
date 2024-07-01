import axios from "axios";

const api = axios.create({
    baseURL: 'http://api.onstudy.uz/api'
})

export default api