import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, RefreshControl, ActivityIndicator, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import { fetchUser, fetchTransactions } from './api/restApi';

const img = require('./foto.png');
const sun = require('./sun.png');

export default function Home() {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  // const fetchData = async () => {
  //   try {
  //     setIsLoading(true);
  //     setError(null);

  //     // Fetch user and transactions concurrently
  //     const [userData, transactionsData] = await Promise.all([fetchUser(), fetchTransactions()]);

  //     setUser(userData);
  //     setTransactions(transactionsData);
  //   } catch (err) {
  //     console.error('Data fetching error:', err);
  //     setError(err.message);

  //     Toast.show({
  //       type: 'error',
  //       text1: 'Error',
  //       text2: err.message || 'Failed to load data',
  //     });
  //   } finally {
  //     setIsLoading(false);
  //     setRefreshing(false);
  //   }
  // };
  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const [userData, transactionsData] = await Promise.all([fetchUser(), fetchTransactions()]);

      console.log('User Data:', userData); // Debug
      setUser(userData);
      setTransactions(transactionsData);
    } catch (err) {
      console.error('Data fetching error:', err);
      setError(err.message);

      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: err.message || 'Failed to load data',
      });
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };

  // Initial data fetch
  useEffect(() => {
    fetchData();
  }, []);

  // Pull to refresh handler
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Error state
  if (error) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity onPress={fetchData} style={styles.retryButton}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.greeting}>Good morning, {user.full_name}</Text>
          <Text style={styles.subheader}>Check all your incoming and outgoing transactions here</Text>
        </View>
        <Image source={sun} style={styles.sunIcon} />
      </View>

      <View style={styles.contentPadding}>
        <View style={styles.accountNumberCard}>
          <Text style={styles.accountNumberText}>Account No.</Text>
          <Text style={styles.accountNumberText}>{user.account_no}</Text>
        </View>

        <View style={styles.balanceCard}>
          <View>
            <Text style={styles.balanceLabel}>Balance</Text>
            <View style={styles.balanceRow}>
              <Text style={styles.balanceAmount}>{user.balance}</Text>
              <Ionicons name="eye-outline" size={24} color="#E5E5E5" />
            </View>
          </View>

          <View style={styles.actionButtons}>
            <TouchableOpacity onPress={() => navigation.navigate('Topup')}>
              <Ionicons name="add" color="white" size={30} style={styles.actionButton} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Transfer')}>
              <Feather name="send" color="white" size={25} style={styles.actionButton} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.transactionSection}>
        <Text style={styles.transactionHeader}>Transaction History</Text>

        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#9Bd35A', '#689F38']} />}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <View style={styles.transactionDetails}>
                <Image source={img} style={styles.transactionImage} />
                <View>
                  {/* <Text>{item.id}</Text> */}
                  <Text>{item.name ?? 'Top Up'}</Text>
                  <Text style={styles.transactionType}>{item.type}</Text>
                  <Text style={styles.transactionDate}>{item.created_at}</Text>
                </View>
              </View>
              <Text
                style={[
                  styles.transactionAmount,
                  {
                    color: item.amount && item.amount.toString().startsWith('+') ? '#2DC071' : '#000',
                  },
                ]}
              >
                {item.amount}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFD',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: 'teal',
    padding: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    gap: 10,
    alignItems: 'center',
  },
  greeting: {
    fontWeight: '700',
    fontSize: 25,
  },
  subheader: {
    fontSize: 15,
  },
  sunIcon: {
    width: 81.45,
    height: 77,
  },
  contentPadding: {
    paddingHorizontal: 10,
  },
  accountNumberCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'teal',
    padding: 15,
    borderRadius: 20,
    elevation: 1,
  },
  accountNumberText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  },
  balanceCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 20,
    padding: 25,
    justifyContent: 'space-between',
    borderRadius: 10,
    elevation: 1,
    alignItems: 'center',
  },
  balanceLabel: {
    fontSize: 16,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  balanceAmount: {
    fontSize: 26,
    fontWeight: '700',
  },
  actionButtons: {
    gap: 10,
  },
  actionButton: {
    backgroundColor: 'teal',
    padding: 8,
    borderRadius: 5,
    elevation: 2,
  },
  transactionSection: {
    margin: 20,
  },
  transactionHeader: {
    fontSize: 20,
    fontWeight: '600',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  transactionDetails: {
    flexDirection: 'row',
    gap: 18,
    alignItems: 'center',
  },
  transactionImage: {
    width: 50,
    height: 50,
  },
  transactionType: {
    fontSize: 12,
  },
  transactionDate: {
    fontSize: 10,
    color: '#939393',
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: '400',
  },
});
