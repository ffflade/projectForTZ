import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  primary: '#188977',
  secondary: '#1E90FF',
  accent: '#3498db',

  success: '#00C851',
  error: '#ff4444',

  black: '#171717',
  white: '#FFFFFF',
  background: '#0E4D64'
};

export const SIZES = {
  base: 10,
  width,
  height
};

export const TEXT = {
  retry: 'Try again',
  next: 'Next',
  offline: 'No internet connection',
  reload: 'Reload',
  error: 'ERROR OCCURED',
  success: 'Success',
  fail: 'Fail'
};
