import React from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { COLORS, TEXT } from '../../constants/theme';
import { styles } from './styles';

export const ModalResult = ({ showScoreModal, score, allQuestions, restartQuiz }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={showScoreModal}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.result}>{score > allQuestions.length / 2 ? 'Поздравляем!' : 'Провал!'}</Text>

          <View style={styles.scoreContainer}>
            <Text
              style={[
                styles.scorePersonal,
                {
                  color: score > allQuestions.length / 2 ? COLORS.success : COLORS.error
                }
              ]}
            >
              {score + ' '}
            </Text>
            <Text
              style={styles.scoreTotal}
            >
              / {allQuestions.length}
            </Text>
          </View>

          <TouchableOpacity
            onPress={restartQuiz}
            style={styles.restartContainer}
          >
            <Text
              style={styles.restartText}
            >
              {TEXT.retry}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
