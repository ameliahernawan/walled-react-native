import React, { use, useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput, Text, KeyboardAvoidingView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { login, register } from './api/restApi';
import { useAuth } from './context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FormComponent({ state }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // const [error, setError] = useState({});
  const { login: setLoginState, register: setRegisterState } = useAuth();
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (state === 'Login') {
      handleLogin(email, password);
    } else {
      handleRegister(name, email, password, phoneNumber);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const { token } = await login(email, password);
      // console.log(result);
      AsyncStorage.setItem('userToken', token);
      alert('Success', 'Login successful');
      navigation.navigate('Home');
    } catch (error) {
      alert('Error', error.message);
    }
  };

  const handleRegister = async (full_name, email, password, phone_number) => {
    try {
      const { token } = await register(full_name, email, password, phone_number);
      setRegisterState(token);
      alert('Success', 'Register successful');
      navigation.navigate('Home');
    } catch (error) {
      alert('Error', error.message);
    }
  };

  // const validate = () => {
  //   const errors = {};
  //   // Validasi email
  //   if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  //     errors.email = 'Format email tidak sesuai';
  //   }

  //   // Validasi password
  //   if (!password || password.length <= 7) {
  //     errors.password = 'Password harus lebih dari 7 karakter';
  //   }

  //   // Validasi nama (hanya untuk register)
  //   if (state === 'register' && (!name || name.length <= 7)) {
  //     errors.name = 'Nama harus lebih dari 7 karakter';
  //   }

  //   // Jika validasi terpenuhi
  //   // if (Object.keys(errors).length === 0) {
  //   //   navigation.navigate('Home');
  //   // }

  //   setError(errors);
  //   return Object.keys(errors).length === 0;
  // };
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        {state === 'register' && (
          <>
            <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} autoCorrect={false} />
            {/* {error.name && <Text style={styles.error}>{error.name}</Text>} */}
          </>
        )}
        {state === 'register' && (
          <>
            <TextInput style={styles.input} placeholder="Enter your phone number" value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="numeric" autoCorrect={false} autoCapitalize="none" />
            {/* {error.phoneNumber && <Text style={styles.error}>{error.phoneNumber}</Text>} */}
          </>
        )}

        <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={setEmail} autoCorrect={false} autoCapitalize="none"></TextInput>
        {/* {error.email && <Text>{error.email}</Text>} */}

        <TextInput style={styles.input} placeholder="Enter your password" value={password} onChangeText={setPassword} autoCorrect={false} autoCapitalize="none" secureTextEntry></TextInput>
        {/* {error.password && <Text>{error.password}</Text>} */}
      </KeyboardAvoidingView>

      <Button title={state === 'Login' ? 'Login' : 'Register'} onPress={handleSubmit} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FAFBFD',
    borderRadius: 5,
    fontSize: 14,
    height: 45,
    padding: 12,
    marginBottom: 12,
  },
});
