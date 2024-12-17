import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatList, StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, Box, ActivityIndicator } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { fetchPost } from './api/restApi';
import { useEffect, useState } from 'react';

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
  {
    id: '5',
    name: 'Amelia Hernawan',
    type: 'Transfer',
    date: '08 Desember 2024',
    amount: '-75.000,00',
    amountColor: '#000',
  },
];

export default function Home() {
  const navigation = useNavigation();
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getPost = async () => {
  //     try {
  //       const data = await fetchPost();
  //       console.log('Fetched Data:', data);
  //       setPost(data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getPost();
  // }, []);

  // if (loading) {
  //   return <ActivityIndicator size="large" color="#0000ff" />;
  // }

  // if (error) {
  //   return (
  //     <View>
  //       <Text>{error}</Text>
  //     </View>
  //   );
  // }

  return (
    <View style={{ flex: 1, backgroundColor: '#FAFBFD' }}>
      <View style={{ flexDirection: 'row', width: '100%', padding: 20, gap: 10, alignItems: 'center' }}>
        <View>
          <Text style={{ fontWeight: 700, fontSize: 25 }}>Good morning, Amel</Text>
          <Text style={{ fontSize: 15 }}>Check all your incoming and outgoing transactions here</Text>
        </View>
        <Image source={sun} style={{ width: 81.45, height: 77 }} />
      </View>

      {/* <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <View style={{ padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>{item.first_name}</Text>
                <Text>{item.last_name}</Text>
                <Image source={{ uri: item.avatar }} style={{ width: 50, height: 50, borderRadius: 25 }} />
              </View>
              <Text style={{ fontSize: 14, fontWeight: 400 }}>{item.amount}</Text>
            </View>
          </View>
        )}
      /> */}

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
          style={{ height: 290 }}
          renderItem={({ item }) => (
            <View style={{ flex: 1 }}>
              <View style={{ padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', gap: 18, alignItems: 'center' }}>
                  <Image source={img} style={{ width: 50, height: 50 }}></Image>
                  <View>
                    <Text>{item.name}</Text>
                    <Text style={{ fontSize: 12 }}>{item.type}</Text>
                    <Text style={{ fontSize: 10, color: '#939393' }}>{item.date}</Text>
                  </View>
                </View>
                <Text style={{ fontSize: 14, fontWeight: 400 }}>{item.amount}</Text>
              </View>
            </View>
          )}
        />
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
