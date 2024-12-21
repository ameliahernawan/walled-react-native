import React, { useEffect, createContext, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext(); //untuk membuat konteks yang memungkinkan data tertentu tersedia untuk seluruh komponen yang ada dalam hierarki

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (token) => {
    setUser({ token });
    setIsLoggedIn(true);
    await AsyncStorage.setItem('userToken', token);
  };

  const register = async (token) => {
    setUser({ token });
    await AsyncStorage.setItem('userToken', token);
  };
  const logout = async () => {
    setUser(null);
    setIsLoggedIn(false);
    await AsyncStorage.removeItem('userToken');
  };
  return <AuthContext.Provider value={{ login, register, logout, user, isLoggedIn }}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);
