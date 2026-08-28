import axios from "axios";


const api = axios.create({
   // baseURL: "http://localhost:8080/api/v1",
   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
   withCredentials: true,
});
api.interceptors.request.use(
   (config) => {
      if (typeof window !== "undefined") {
         const token = localStorage.getItem("token");

         if (token) {
            config.headers.Authorization = `Bearer ${token}`;
         }
      }

      return config;
   },
   (error) => {
      return Promise.reject(error);
   }
);

export default api;



// api.interceptors.request.use(function(config){

// })