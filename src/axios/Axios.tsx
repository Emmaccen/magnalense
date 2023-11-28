// axios.tsx
import axios from "axios";

const cancelTokenSource = axios.CancelToken.source();

// Create an instance of Axios
const axiosInstance = axios.create({
  baseURL: "", // Set your API base URL
  timeout: 10000, // Timeout after 10 seconds
  headers: {
    "Content-Type": "application/json", // Specify the content type header
  },
  cancelToken: cancelTokenSource.token,
  withCredentials: true, // Set credentials to true
});

// Make a request with credentials enabled

const axiosInstanceWithHeader = axios.create({
  baseURL: "", // Set your API base URL
  timeout: 10000, // Timeout after 10 seconds
  headers: {
    Authorization: `Bearer ${localStorage.getItem("userToken")}`, // Set the Authorization header with the token
    "Content-Type": "application/json", // You can modify this header pe as needed
  },
  cancelToken: cancelTokenSource.token,
  withCredentials: true, // Set credentials to true
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Do something with the request config
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Do something with the response data
    return response;
  },
  (error) => {
    if (axios.isCancel(error)) {
      console.log("Request canceled", error.message);
    } else {
      console.error("Error:", error);
    }
    return Promise.reject(error);
  }
);

export { axiosInstance, axiosInstanceWithHeader, cancelTokenSource };
