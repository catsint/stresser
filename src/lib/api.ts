// utils/api.ts
import axios from "axios";

// Get API URL from environment variable or use default
const getApiUrl = () => {
  // Always prioritize NEXT_PUBLIC_API_URL environment variable
  // This works in both client and server-side rendering
  const envUrl = process.env.NEXT_PUBLIC_API_URL;
  
  if (envUrl) {
    return envUrl;
  }
  
  // Fallback: check if we're in production
  const isProduction = process.env.NODE_ENV === 'production';
  
  if (isProduction) {
    // In production, don't default to localhost - require explicit configuration
    console.warn('NEXT_PUBLIC_API_URL is not set in production. Please configure it in Netlify environment variables.');
    return "http://localhost:8000"; // This will fail, but at least it's explicit
  }
  
  // Development default
  return "http://localhost:8000";
};

const apiBaseURL = getApiUrl();

const api = axios.create({
  baseURL: apiBaseURL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  timeout: 10000, // 10 second timeout
});

api.interceptors.request.use(
  config => {
    // Para ambiente de desenvolvimento, use sessionStorage ou estado global
    // localStorage não funciona em artifacts do Claude
    const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => response,
  error => {
    // Enhanced error handling
    if (error.code === 'ECONNABORTED') {
      error.message = 'Request timeout. Please check your connection.';
    } else if (error.code === 'ERR_NETWORK' || !error.response) {
      error.message = `Cannot connect to server at ${apiBaseURL}. Please ensure the backend server is running.`;
    }
    return Promise.reject(error);
  }
);

export default api;