import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

export const styles = StyleSheet.create({
  questionsCounter: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  questionCountText: {
    color: COLORS.white,
    fontSize: 20,
    opacity: 0.6,
    marginRight: 2
  },
  questionText: {
    color: COLORS.white,
    fontSize: 20
  }
});
