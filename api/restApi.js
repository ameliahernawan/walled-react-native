import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const token = AsyncStorage.getItem('userToken');

const api = axios.create({
  baseURL: 'http://54.254.164.127/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token,
  },
});

export const fetchPosts = async () => {
  try {
    const response = await api.get('/auth/users');
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch posts: ' + error.message);
  }
};

export const createPost = async (postData) => {
  try {
    const response = await api.post('/auth/users', postData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create post: ' + error.message);
  }
};

export const login = async (email, password) => {
  try {
    const body = {
      email,
      password,
    };
    const response = await api.post('/auth/login', body);
    // console.log(response);
    return response.data.data;
  } catch (error) {
    // console.log(error);
    throw new Error(error.response?.data?.error || 'Login failed');
  }
};

export const register = async (fullName, email, password, phoneNumber) => {
  try {
    const body = {
      full_name: fullName,
      email: email,
      password: password,
      phone_number: phoneNumber,
    };
    const response = await api.post('/auth/register', body);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Registration failed');
  }
};

export default api;
