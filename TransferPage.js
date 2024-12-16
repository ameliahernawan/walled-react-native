import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, Box, TextInput } from 'react-native';

export default function TransferPage() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FAFBFD', justifyContent: 'space-between' }}>
      <View>
        <View style={{ backgroundColor: 'teal', padding: 15 }}>
          <Text style={{ color: 'white', fontSize: 16 }}>To: 9000000000896321</Text>
        </View>

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

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 2, margin: 5 }}>
            <Text style={{ color: '#babdbb' }}>Balance</Text>
            <Text style={{ color: 'teal' }}>IDR 10.000.000</Text>
          </View>
        </View>

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
          <Text style={{ color: 'white', fontWeight: 700 }}>Transfer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
