import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatList, StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, Box } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Feather from '@expo/vector-icons/Feather';

const img = require('./foto.png');
const sun = require('./sun.png');
const data = [
  {
    id: '1',
    name: 'Amelia Hernawan',
    type: 'Transfer',
    date: '08 Desember 2024',
    amount: '-75.000,00',
    amountColor: '#000',
  },
  {
    id: '2',
    name: 'Amelia Hernawan',
    type: 'Transfer',
    date: '08 Desember 2024',
    amount: '+75.000,00',
    amountColor: '#2DC071',
  },
  {
    id: '3',
    name: 'Amelia Hernawan',
    type: 'Transfer',
    date: '08 Desember 2024',
    amount: '-75.000,00',
    amountColor: '#000',
  },
  {
    id: '4',
    name: 'Amelia Hernawan',
    type: 'Transfer',
    date: '08 Desember 2024',
    amount: '-75.000,00',
    amountColor: '#000',
  },
];

const TransactionItem = ({ name, type, date, amount, amountColor, image }) => (
  <View style={styles.itemContainer}>
    <View style={styles.itemLeft}>
      <Image source={image} style={styles.image} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.type}>{type}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
    <View>
      <Text style={[styles.amount, { color: amountColor }]}>{amount}</Text>
    </View>
  </View>
);

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#FAFBFD' }}>
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
              <Ionicons name="add" color="white" size={30} style={{ backgroundColor: 'teal', padding: 8, borderRadius: 5, elevation: 2 }} onPress={() => navigation.navigate('Topup')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="send" color="white" size={25} style={{ backgroundColor: 'teal', padding: 10, borderRadius: 5, elevation: 2 }} onPress={() => navigation.navigate('Transfer')} />
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

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionItem name={item.name} type={item.type} date={item.date} amount={item.amount} amountColor={item.amountColor} image={require('./sun.png')} />}
        ></FlatList>
        {/* <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between', alignItems: 'center' }}>
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
        </View> */}
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