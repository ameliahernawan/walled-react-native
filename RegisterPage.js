import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, Box, TextInput } from 'react-native';
import FormComponent from './form';
import TermConditionPage from './TermConditionPage';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const img = require('./walled.png');

export default function RegisterPage() {
  const navigation = useNavigation();
  const [tncVisible, setTncVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
      <View style={{ marginTop: 35, alignItems: 'center' }}>
        <Image source={img} style={{ width: 250, height: 60 }} />
      </View>

      <View style={{ gap: 18, margin: 10 }}>
        <FormComponent state="register"></FormComponent>

        <View style={{ flexDirection: 'row' }}>
          <Text>I have read and agree to the </Text>
          <Text>
            <TouchableOpacity onPress={() => setTncVisible(true)}>
              <Text style={{ color: 'teal' }}>Terms and Conditions *</Text>
            </TouchableOpacity>
            <TermConditionPage visible={tncVisible} onClose={() => setTncVisible(false)} />
          </Text>
        </View>
      </View>

      <View style={{ margin: 10, gap: 12 }}>
        {/* <TouchableOpacity style={{ backgroundColor: 'teal', padding: 15, borderRadius: 5, alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 700 }}>Register</Text>
        </TouchableOpacity> */}

        <View style={{ flexDirection: 'row' }}>
          <Text>Already have an account? </Text>
          <Text>
            <TouchableOpacity>
              <Text style={{ color: 'teal' }} onPress={() => navigation.navigate('Login')}>
                Login Here
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
}
