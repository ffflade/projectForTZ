import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center'
  },
  reloadText: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.error,
    alignSelf: 'center'
  },
  reloadButton: {
    backgroundColor: COLORS.black,
    height: 50,
    width: 200,
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  reloadButtonText: {
    color: COLORS.white
  }
});
