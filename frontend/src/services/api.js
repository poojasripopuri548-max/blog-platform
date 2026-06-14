import axios from "axios";

const API = axios.create({
  baseURL: "https://blog-platform-backend-497q.onrender.com/api",
});

API.interceptors.request.use((req) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");

    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
  }

  return req;
});

export default API;