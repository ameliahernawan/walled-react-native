import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, Box, TextInput } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import AntDesign from '@expo/vector-icons/AntDesign';
const img = require('./foto.png');

const data = [
  { label: 'Byond Pay', value: '1' },
  { label: 'Wondr Pay', value: '2' },
  { label: 'Livin Pay', value: '3' },
  { label: 'Blu Pay', value: '4' },
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);

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
            />
          </View>
        </View>

        <DropdownComponent />

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
          />
        </View>
      </View>

      <View>
        <TouchableOpacity style={{ backgroundColor: 'teal', padding: 15, margin: 10, borderRadius: 5, alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 700 }}>Top Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
