import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

export const styles = StyleSheet.create({
  optionContainer: {
    borderWidth: 3,
    height: 60,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 5
  },
  optionText: {
    fontSize: 20,
    color: COLORS.white
  },
  optionCorrect: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.success,
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionError: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.error,
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionIcon: {
    width: 30,
    height: 30,
    zIndex: -1,
    opacity: 1
  }
});
