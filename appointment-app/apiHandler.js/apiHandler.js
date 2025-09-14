import axios from 'axios';

// Create a basic Axios client with a base URL
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Matches your backend's URL
});

// Example: a function to fetch all appointments from the backend
export const getAppointments = async () => {
  try {
    const response = await api.get('/appointments');
    return response.data;
  } catch (error) {
    console.error("Failed to fetch appointments:", error.message);
    throw error;
  }
};

// Example: a function to create a new user
export const createUser = async (userData) => {
  try {
    const response = await api.post('/users/signup', userData);
    return response.data;
  } catch (error) {
    console.error("Failed to create user:", error.message);
    throw error;
  }
};