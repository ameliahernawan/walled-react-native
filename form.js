import React, { use, useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput, View, Text, KeyboardAvoidingView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { login, register } from './api/restApi';
import { useAuth } from './context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FormComponent({ state }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const auth = useAuth();
  const navigation = useNavigation();

  const handleSubmitLogin = () => {
    if (!email || !password) {
      alert('Validation Error', 'Email and Password are required');
      return;
    }
    handleLogin(email, password);
  };

  const handleSubmitRegister = () => {
    if (!name || !email || !password) {
      alert('Validation Error', 'Name, Email, and Password are required');
      return;
    }
    handleRegister(name, email, password);
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await login(email, password);
      // await auth.login(response.data.token);
      // console.log('HAHAHHAHAHAHAHAHH');
      // console.log(response.data.tokenn);
      AsyncStorage.setItem('userToken', response.token);
      console.log(response.token);
      navigation.navigate('Home');
      alert('Success', 'Login successful');
    } catch (error) {
      alert('Error', error.message);
    }
  };

  const handleRegister = async (name, email, password) => {
    try {
      const response = await register(name, email, password);
      await auth.register(response.data.token);
      // const { token } = await register(name, email, password);
      console.log(response.data.token);
      navigation.navigate('Login');
      alert('Success', 'Register successful');
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
        <TextInput style={styles.input} placeholder="Enter your password" value={password} onChangeText={setPassword} autoCorrect={false} autoCapitalize="none" secureTextEntry></TextInput>
      </KeyboardAvoidingView>

      {state === 'register' ? (
        <View style={[styles.button, styles.primary]}>
          <Button title="Register" color="white" onPress={handleSubmitRegister} />
        </View>
      ) : (
        <View style={[styles.button, styles.primary]}>
          <Button title="Login" color="white" onPress={handleSubmitLogin} />
        </View>
      )}
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
