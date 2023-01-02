import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    backgroundColor: COLORS.white,
    width: '90%',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center'
  },
  result: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 20
  },
  scorePersonal: {
    fontSize: 30
  },
  scoreTotal: {
    fontSize: 20,
    color: COLORS.black
  },
  restartContainer: {
    backgroundColor: COLORS.accent,
    padding: 20,
    width: '100%',
    borderRadius: 20
  },
  restartText: {
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 20
  }
});
