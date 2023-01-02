import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../../constants/theme';
import { styles } from './styles';

export const Questions = ({ currentQuestionIndex, allQuestions }) => {
  return (
    <View>
      <View style={styles.questionsCounter}>
        <Text style={styles.questionCountText}>{currentQuestionIndex + 1} /</Text>
        <Text style={styles.questionCountText}>{allQuestions.length}</Text>
      </View>

      <Text style={styles.questionText}>{allQuestions[currentQuestionIndex]?.question}</Text>
    </View>
  );
};
