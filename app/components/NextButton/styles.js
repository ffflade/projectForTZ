import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

export const styles = StyleSheet.create({
  nextContainer: {
    marginTop: 20,
    width: '100%',
    backgroundColor: COLORS.accent,
    padding: 20,
    borderRadius: 5
  },
  nextText: {
    fontSize: 20,
    color: COLORS.white,
    textAlign: 'center'
  }
});
