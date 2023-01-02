import React, { useState } from 'react';
import { View, StatusBar, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../constants/theme';
import { Questions, Options, ModalResult, NextButton } from '../../components';
import data from '../../data/QuizData';
import { styles } from './styles';

const Quiz = () => {
  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  const validateAnswer = (selectedOption) => {
    const correctOption = allQuestions[currentQuestionIndex]['correct_option'];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correctOption);
    setIsOptionsDisabled(true);

    if (selectedOption == correctOption) {
      setScore(score + 1);
    }

    setShowNextButton(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      setShowScoreModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
  };

  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
  };

  return (
    <SafeAreaView style={styles.areaView}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.primary} />

      <View style={styles.container}>
        <Questions currentQuestionIndex={currentQuestionIndex} allQuestions={allQuestions} />

        <Options
          allQuestions={allQuestions}
          currentOptionSelected={currentOptionSelected}
          currentQuestionIndex={currentQuestionIndex}
          validateAnswer={validateAnswer}
          isOptionsDisabled={isOptionsDisabled}
          correctOption={correctOption}
        />

        <NextButton showNextButton={showNextButton} handleNext={handleNext} />

        <ModalResult
          allQuestions={allQuestions}
          showScoreModal={showScoreModal}
          score={score}
          restartQuiz={restartQuiz}
        />
      </View>
    </SafeAreaView>
  );
};

export default Quiz;
