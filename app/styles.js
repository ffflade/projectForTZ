import { StyleSheet } from 'react-native';
import { COLORS } from './constants/theme';

export const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollView: {
    backgroundColor: COLORS.background
  }
});
