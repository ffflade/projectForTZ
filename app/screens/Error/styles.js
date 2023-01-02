import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

export const styles = StyleSheet.create({
  areaView: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: COLORS.background,
    position: 'relative'
  },
  textError: {
    fontSize: 20,
    color: COLORS.white,
    textAlign: 'center'
  }
});
