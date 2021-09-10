import axios from 'axios'


const api = axios.create({
    baseURL: ' https://www.eventbriteapi.com/v3'
})

export default api;
