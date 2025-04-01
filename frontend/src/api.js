// api.js
import axios from 'axios';

// Set base URL for your backend
const API_URL = "http://localhost:5001/auth";

// Register user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;  // Returns the response from the backend
  } catch (error) {
    throw error.response.data;  // Throws error response to be handled on frontend
  }
};

// Login user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;  // Returns the response from the backend
  } catch (error) {
    throw error.response.data;  // Throws error response to be handled on frontend
  }
};
