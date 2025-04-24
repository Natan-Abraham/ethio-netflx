import axios from "axios";

const tmdbAPI = axios.create({
  baseURL: process.env.REACT_APP_TMDB_BASE_URL,
  params: {
    api_key: process.env.REACT_APP_TMDB_API_KEY,
    language: "en-US",
  },
});

// Request interceptor
tmdbAPI.interceptors.request.use((config) => {
  console.log("Request URL:", config.url);
  return config;
});

// Response interceptor
tmdbAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.status, error.message);
    return Promise.reject(error);
  }
);

export default tmdbAPI;
