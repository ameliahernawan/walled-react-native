import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, Box } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

const img = require('./foto.png');
const sun = require('./sun.png');

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FAFBFD' }}>
      <View style={{ marginTop: 35 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: 10, elevation: 2 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Image source={img} style={{ width: 46, height: 46 }} />
            <View>
              <Text style={{ fontWeight: 700 }}>Amelia Hernawan</Text>
              <Text>Personal Account</Text>
            </View>
          </View>
          <Ionicons name="sunny-outline" color="#F8AB39" size={30} />
        </View>
      </View>

      <View style={{ flexDirection: 'row', width: '100%', padding: 20, gap: 10, alignItems: 'center' }}>
        <View>
          <Text style={{ fontWeight: 700, fontSize: 25 }}>Good morning, Amel</Text>
          <Text style={{ fontSize: 15 }}>Check all your incoming and outgoing transactions here</Text>
        </View>
        <Image source={sun} style={{ width: 81.45, height: 77 }} />
      </View>

      <View style={{ paddingHorizontal: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'teal', padding: 15, borderRadius: 20, elevation: 1 }}>
          <Text style={{ color: 'white', fontWeight: 500, fontSize: 18 }}>Account No.</Text>
          <Text style={{ color: 'white', fontWeight: 500, fontSize: 18 }}>100899</Text>
        </View>

        <View style={{ flexDirection: 'row', backgroundColor: 'white', marginTop: 20, padding: 25, justifyContent: 'space-between', borderRadius: 10, elevation: 1, alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 16 }}>Balance</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Text style={{ fontSize: 26, fontWeight: 700 }}>Rp 10.000.000</Text>
              <Ionicons name="eye-outline" size={24} color="#E5E5E5" />
            </View>
          </View>

          <View style={{ gap: 10 }}>
            <TouchableOpacity>
              <Ionicons name="add" color="white" size={30} style={{ backgroundColor: 'teal', padding: 8, borderRadius: 5, elevation: 2 }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="send" color="white" size={25} style={{ backgroundColor: 'teal', padding: 10, borderRadius: 5, elevation: 2 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ margin: 20 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 600,
            padding: 12,
            borderBottomWidth: 1, // Menambahkan garis bawah
            borderBottomColor: '#E5E5E5',
          }}
        >
          Transaction History
        </Text>

        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <Image source={sun} style={{ width: 30, height: 30 }} />
            <View>
              <Text style={{ fontSize: 16 }}>Adityo Gizwanda</Text>
              <Text style={{ fontSize: 14 }}>Transfer</Text>
              <Text style={{ fontSize: 12, fontWeight: 400, color: '#939393' }}>08 December 2024</Text>
            </View>
          </View>
          <View>
            <Text>-75.000,00</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <Image source={sun} style={{ width: 30, height: 30 }} />
            <View>
              <Text style={{ fontSize: 16 }}>Adityo Gizwanda</Text>
              <Text style={{ fontSize: 14 }}>Transfer</Text>
              <Text style={{ fontSize: 12, fontWeight: 400, color: '#939393' }}>08 December 2024</Text>
            </View>
          </View>
          <View>
            <Text style={{ color: '#2DC071' }}>+75.000,00</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <Image source={sun} style={{ width: 30, height: 30 }} />
            <View>
              <Text style={{ fontSize: 16 }}>Adityo Gizwanda</Text>
              <Text style={{ fontSize: 14 }}>Transfer</Text>
              <Text style={{ fontSize: 12, fontWeight: 400, color: '#939393' }}>08 December 2024</Text>
            </View>
          </View>
          <View>
            <Text>-75.000,00</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <Image source={sun} style={{ width: 30, height: 30 }} />
            <View>
              <Text style={{ fontSize: 16 }}>Adityo Gizwanda</Text>
              <Text style={{ fontSize: 14 }}>Transfer</Text>
              <Text style={{ fontSize: 12, fontWeight: 400, color: '#939393' }}>08 December 2024</Text>
            </View>
          </View>
          <View>
            <Text>-75.000,00</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 50,
  },
  box: {
    flex: 1,
    width: 200,
    height: 200,
    paddingHorizontal: 20,
    paddingVertical: 20,
    margin: 10,
  },
  button: {
    backgroundColor: 'red',
    fontSize: 100,
    padding: 15,
  },
});
