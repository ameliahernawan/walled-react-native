import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View, Image, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
const img = require('./foto.png');
import { fetchUser } from './api/restApi';

export const AccountHeader = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const userData = await fetchUser();
      console.log('Data header: ', userData);
      setUser(userData);
      setLoading(false);
    } catch (err) {
      console.error('Data fetching error:', err);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View style={{}}>
        <Text style={{}}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={{ marginTop: 35 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: 10, elevation: 2 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Image source={img} style={{ width: 46, height: 46 }} />
          <View>
            <Text style={{ fontWeight: 700 }}>{user.full_name}</Text>
            <Text>Personal Account</Text>
          </View>
        </View>
        <Ionicons name="sunny-outline" color="#F8AB39" size={30} />
      </View>
    </View>
  );
};
