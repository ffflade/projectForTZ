import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { TEXT } from '../../constants/theme';
import { styles } from './styles';

export const NextButton = ({ showNextButton, handleNext }) => {
  if (showNextButton) {
    return (
      <TouchableOpacity onPress={handleNext} style={styles.nextContainer}>
        <Text style={styles.nextText}>{TEXT.next}</Text>
      </TouchableOpacity>
    );
  }
  return null;
};
