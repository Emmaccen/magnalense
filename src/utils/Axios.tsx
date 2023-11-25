// axios.js
import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: 'https://api.example.com', // Replace with your API base URL
	timeout: 10000, // Timeout after 10 seconds
	headers: {
		'Content-Type': 'application/json',
		// Add any other headers you need
	},
	withCredentials: true, // Set credentials to true
});

// Make a request with credentials enabled

export const axiosInstanceWithHeader = axios.create({
	baseURL: 'https://kampusly-backend-nodejs.vercel.app/api/v1', // Set your API base URL
	headers: {
		Authorization: `Bearer ${localStorage.getItem('userToken')}`, // Set the Authorization header with the token
		'Content-Type': 'application/json', // You can modify this header pe as needed
	},
	// "Content-Type": "application/json", // Example header
	withCredentials: true, // Set credentials to true
});
