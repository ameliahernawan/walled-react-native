import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const token = AsyncStorage.getItem('userToken');

const api = axios.create({
  baseURL: 'http://54.254.164.127/api/v1',
});

export const fetchUser = async () => {
  const token = await AsyncStorage.getItem('userToken');
  try {
    const response = await api.get('/users/me', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    // Optionally throw an error to be caught by the caller
    throw new Error('Failed to fetch user data');
  }
};

export const login = async (email, password) => {
  try {
    const body = {
      email,
      password,
    };
    // console.log(body);

    const response = await api.post('/auth/login', body);
    // console.log(response.data);
    return response.data.data;
  } catch (error) {
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

export const fetchTransactions = async () => {
  const token = await AsyncStorage.getItem('userToken');
  try {
    const response = await api.get('/transactions', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Get transactions failed');
  }
};

export const topUp = async (type, from_to, amount, description) => {
  const token = await AsyncStorage.getItem('userToken');
  if (!token) {
    throw new Error('User token not found');
  }
  try {
    const response = await api.post(
      '/transactions',
      { type, from_to, amount, description },
      {
        headers: {
          Authorization: 'Bearer ' + token, // Optional: if your backend requires token in header
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error('Error creating transaction:', error.response?.data || error.message);
    throw new Error('Failed to create transaction: ' + error.message);
  }
};

export default api;
