import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View, Image } from 'react-native';
const img = require('./foto.png');
const sun = require('./sun.png');

export const AccountHeader = () => {
  return (
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
  );
};
