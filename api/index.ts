import axios from "axios";


const api = axios.create({
   // baseURL: "http://localhost:8080/api/v1",
   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
   withCredentials: true,
});

export default api;

// api.interceptors.request.use(function(config){

// })