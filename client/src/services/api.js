import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor for auth token
api.interceptors.request.use(
  (config) => {
    const authData = localStorage.getItem('auth');
    if (authData) {
      const { token } = JSON.parse(authData);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// User API calls
export const register = async (userData) => {
  const response = await api.post('/users/register', userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await api.post('/users/login', credentials);
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get('/users/me');
  return response.data;
};

export const getUserById = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with ID ${userId}:`, error);
    return null;
  }
};

export const searchUsers = async (query) => {
  const response = await api.get(`/users?search=${query}`);
  return response.data;
};

// Messages API calls
export const sendMessage = async (messageData) => {
  const response = await api.post('/messages/send', messageData);
  return response.data;
};

export const getChatHistory = async (user1Id, user2Id) => {
  const response = await api.get(`/messages/history/${user1Id}/${user2Id}`);
  return response.data;
};

export const getUnseenMessages = async (userId) => {
  const response = await api.get(`/messages/unseen/${userId}`);
  return response.data;
};

export const markMessageAsSeen = async (messageId) => {
  const response = await api.put(`/messages/seen/${messageId}`);
  return response.data;
};

// Anonymous Messages endpoints
export const getAnonymousMessages = async () => {
  const response = await api.get('/anonymous-messages');
  return response.data;
};

export const sendAnonymousMessage = async (messageData) => {
  const response = await api.post('/anonymous-messages', messageData);
  return response.data;
};

export default api; 