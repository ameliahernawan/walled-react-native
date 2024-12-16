import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, Box, TextInput } from 'react-native';
import FormComponent from './form';

const img = require('./walled.png');

export default function RegisterPage() {
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
            <TouchableOpacity onPress={() => console.log('Terms n Condition clicked')}>
              <Text style={{ color: 'teal' }}>Terms and Conditions *</Text>
            </TouchableOpacity>
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
            <TouchableOpacity onPress={() => console.log('Login clicked')}>
              <Text style={{ color: 'teal' }}>Login Here</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
}