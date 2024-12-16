import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, Box, TextInput } from 'react-native';
import React, { useState } from 'react';
import FormComponent from './form';
import { useNavigation } from '@react-navigation/native';

const img = require('./walled.png');

export default function LoginPage() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
      <View style={{ marginTop: 35, alignItems: 'center' }}>
        <Image source={img} style={{ width: 250, height: 60 }} />
      </View>

      {/* <View style={{ gap: 12, margin: 10 }}>
        <TextInput
          style={{
            backgroundColor: '#FAFBFD',
            borderRadius: 5,
            fontSize: 14,
            padding: 12,
          }}
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Email"
        />
        <TextInput
          style={{
            backgroundColor: '#FAFBFD',
            borderRadius: 5,
            fontSize: 14,
            padding: 12,
          }}
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
        />
      </View> */}

      <View style={{ gap: 12, margin: 10 }}>
        <FormComponent state="Login"></FormComponent>
      </View>

      <View style={{ margin: 10, gap: 12 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text>Don't have an account? </Text>
          <Text>
            <TouchableOpacity onPress={() => console.log('Register clicked')}>
              <Text style={{ color: 'teal' }}>Register Here</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
}
