import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, Box, TextInput } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { topUp } from './api/restApi';

import AntDesign from '@expo/vector-icons/AntDesign';
const img = require('./foto.png');

const data = [
  { label: 'Byond', value: 'byond' },
  { label: 'Wondr', value: 'wondr' },
  { label: 'Livin', value: 'livin' },
  { label: 'Blu', value: 'blue' },
];

const DropdownComponent = ({ value, setValue }) => {
  return (
    <Dropdown
      style={{
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        zIndex: 1000,
      }}
      data={data}
      labelField="label"
      valueField="value"
      maxHeight={300}
      value={value}
      placeholder="Select payment method"
      onChange={(item) => {
        setValue(item.value);
      }}
    />
  );
};

export default function TopupPage() {
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState(null);

  // const handleTopUp = async () => {
  //   try {
  //     const userToken = await AsyncStorage.getItem('userToken');
  //     console.log('raw token: ' + userToken);
  //     if (!userToken) {
  //       throw new Error('User token not found');
  //     }

  //     const type = 'c'; // Kredit
  //     try {
  //       const response = await topUp(type, userToken, parseInt(amount, 10), notes);

  //       Alert.alert('Success', 'Top up successful!');
  //       console.log('Transaction response:', response);

  //       setAmount('');
  //       setNotes('');
  //       setPaymentMethod(null);
  //     } catch (apiError) {
  //       console.log('API Error Details:', {
  //         message: apiError.message,
  //         response: apiError.response?.data,
  //         status: apiError.response?.status,
  //         fullError: apiError,
  //       });

  //       Alert.alert('Error', 'Failed to create transaction. ' + apiError.message);
  //       console.error('API Error:', apiError);
  //     }
  //   } catch (error) {
  //     console.log('general error', error);
  //     Alert.alert('eror', 'an unexpected error occured ' + error.message);
  //   }
  // };

  const handleTopUp = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      console.log('Token from AsyncStorage: ', userToken);

      // const userData = JSON.parse(userToken); // Mengurai token menjadi JSON
      // const from_to = userData.account_no;

      const response = await topUp(
        'c', // type (credit)
        paymentMethod, // from_to
        parseInt(amount, 10), // amount
        notes // description
      );

      Alert.alert('Success', 'Top up successful!');

      // Reset form fields
      setAmount('');
      setNotes('');
      setPaymentMethod(null);
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to top up');
      console.error('Top Up Error:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FAFBFD', justifyContent: 'space-between' }}>
      <View>
        <View style={{ margin: 15 }}>
          <Text style={{ color: '#babdbb', fontSize: 14 }}>Amount</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 18, fontWeight: '700', padding: 5 }}>IDR</Text>
            <TextInput
              style={{
                fontSize: 24,
                fontWeight: '500',
                flex: 1,
                borderBottomWidth: 1,
                borderBottomColor: '#E5E5E5',
              }}
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
            />
          </View>
        </View>

        <DropdownComponent value={paymentMethod} setValue={setPaymentMethod} />

        <View style={{ margin: 15 }}>
          <Text style={{ color: '#babdbb', fontSize: 14 }}>Notes</Text>
          <TextInput
            style={{
              fontSize: 14,
              borderBottomWidth: 1,
              borderBottomColor: '#E5E5E5',
            }}
            multiline
            keyboardType="text"
            value={notes}
            onChangeText={setNotes}
          />
        </View>
      </View>

      <View>
        <TouchableOpacity style={{ backgroundColor: 'teal', padding: 15, margin: 10, borderRadius: 5, alignItems: 'center' }} onPress={handleTopUp}>
          <Text style={{ color: 'white', fontWeight: 700 }}>Top Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
