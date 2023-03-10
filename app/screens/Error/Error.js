import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, TEXT } from '../../constants/theme';
import { styles } from './styles';

const Error = ({ error }) => {
  return (
    <SafeAreaView style={styles.areaView}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.primary} />

      <View style={styles.container}>
        <Text style={styles.textError}>{TEXT.error}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Error;
