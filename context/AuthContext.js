import React, { useEffect, createContext, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext(); //untuk membuat konteks yang memungkinkan data tertentu tersedia untuk seluruh komponen yang ada dalam hierarki

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStoredData = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken) {
          setToken(storedToken);
          await fetchUser(storedToken);
        }
      } catch (error) {
        console.error('Failed to load token:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadStoredData();
  }, []);

  const fetchUser = async (authToken) => {
    try {
      const response = await fetch('http://54.254.164.127/api/v1/users/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response);

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user data: ', error);
      setUser(null);
    }
  };

  const login = async (newToken) => {
    setToken(newToken);
    await AsyncStorage.setItem('token', newToken);
    await fetchUser(newToken);
  };
  const register = async (newToken) => {
    setToken(newToken);
    await AsyncStorage.setItem('token', newToken);
    await fetchUser(newToken);
  };
  return <AuthContext.Provider value={{ login, register, token, user, isLoading }}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);
