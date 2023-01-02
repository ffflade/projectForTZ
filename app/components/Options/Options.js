import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/theme';
import { styles } from './styles';

export const Options = ({
  allQuestions,
  currentOptionSelected,
  currentQuestionIndex,
  validateAnswer,
  isOptionsDisabled,
  correctOption
}) => {
  const calculateColor = (option) => {
    return option == correctOption
      ? COLORS.success
      : option == currentOptionSelected
      ? COLORS.error
      : COLORS.secondary + 40;
  };

  return (
    <View>
      {allQuestions[currentQuestionIndex]?.options.map((option) => (
        <TouchableOpacity
          onPress={() => validateAnswer(option)}
          disabled={isOptionsDisabled}
          key={option}
          style={[
            styles.optionContainer,
            {
              borderColor: calculateColor(option),
              backgroundColor: calculateColor(option) + 20
            }
          ]}
        >
          <Text style={styles.optionText}>{option}</Text>

          {option == correctOption ? (
            <View style={styles.optionCorrect}>
              <Image
                source={require('../../assets/images/correct.png')}
                style={styles.optionIcon}
                resizeMode={'stretch'}
              />
            </View>
          ) : option == currentOptionSelected ? (
            <View style={styles.optionError}>
              <Image
                source={require('../../assets/images/fail.png')}
                style={styles.optionIcon}
                resizeMode={'stretch'}
              />
            </View>
          ) : null}
        </TouchableOpacity>
      ))}
    </View>
  );
};
