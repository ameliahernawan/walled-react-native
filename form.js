import React, { use, useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput, Text, KeyboardAvoidingView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function FormComponent({ state }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState({});
  const navigation = useNavigation();

  const validate = () => {
    const errors = {};
    // Validasi email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Format email tidak sesuai';
    }

    // Validasi password
    if (!password || password.length <= 7) {
      errors.password = 'Password harus lebih dari 7 karakter';
    }

    // Validasi nama (hanya untuk register)
    if (state === 'register' && (!name || name.length <= 7)) {
      errors.name = 'Nama harus lebih dari 7 karakter';
    }

    // Jika validasi terpenuhi
    if (Object.keys(errors).length === 0) {
      navigation.navigate('Home');
    }

    setError(errors);
  };
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        {state === 'register' && (
          <>
            <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} autoCorrect={false} />
            {error.name && <Text style={styles.error}>{error.name}</Text>}
          </>
        )}
        {state === 'register' && (
          <>
            <TextInput style={styles.input} placeholder="Enter your phone number" value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="numeric" autoCorrect={false} autoCapitalize="none" />
            {error.phoneNumber && <Text style={styles.error}>{error.phoneNumber}</Text>}
          </>
        )}

        <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={setEmail} autoCorrect={false} autoCapitalize="none"></TextInput>
        {error.email && <Text>{error.email}</Text>}

        <TextInput style={styles.input} placeholder="Enter your password" value={password} onChangeText={setPassword} autoCorrect={false} autoCapitalize="none" secureTextEntry></TextInput>
        {error.password && <Text>{error.password}</Text>}
      </KeyboardAvoidingView>

      <Button title={state === 'Login' ? 'Login' : 'Register'} onPress={() => validate()} />
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
