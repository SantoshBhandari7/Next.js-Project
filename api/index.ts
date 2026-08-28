import axios from "axios";


const api = axios.create({
   // baseURL: "http://localhost:8080/api/v1",
   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
   withCredentials: true,
});
api.interceptors.request.use(
   function (config) {
      console.log("request interceptor", config.url);
      return config;
   },
   function (error) {
      console.log("request interceptor error", error);
   },
);

api.interceptors.response.use(
   function (config) {
      console.log("response interceptor", config.status);
      return config;
   },
   function (error) {
      console.log("response interceptor error", error);
   },
)

export default api