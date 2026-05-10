import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://style-decor-server-chi.vercel.app",
  withCredentials: true,
});

// attach token to every request automatically
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
