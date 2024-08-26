import axios from "axios";



const api = axios.create({
    baseURL:"http://localhost:3000",
    timeout:3000,
    headers: {
        "Content-Type": "program/json",
    }
})

export default api;