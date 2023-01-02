import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { TEXT } from '../../constants/theme';
import NetInfo from '@react-native-community/netinfo';
import { styles } from './styles';

export const OfflineScreen = ({ setIsConnected }) => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
  }, []);

  const checkConnection = () => {
    NetInfo.fetch().then((state) => setIsConnected(state.isConnected));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.reloadText}>{TEXT.offline}</Text>
      <TouchableOpacity style={styles.reloadButton} onPress={() => checkConnection()}>
        <Text style={styles.reloadButtonText}>{TEXT.reload}</Text>
      </TouchableOpacity>
    </View>
  );
};
