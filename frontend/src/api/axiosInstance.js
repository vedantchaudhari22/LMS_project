import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

axiosInstance.interceptors.request.use(
  (config) => {
     const accessToken = JSON.parse(sessionStorage.getItem("accessToken")) || "";
    //  const rawToken = sessionStorage.getItem("accessToken");
    // const accessToken = rawToken ? JSON.parse(rawToken) : null;

     //const accessToken = sessionStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (err) => Promise.reject(err)
);

export default axiosInstance;