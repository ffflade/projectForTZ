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
  retry: 'Повторить попытку',
  next: 'Далее',
  offline: 'Нет подключения к интернету',
  reload: 'Перезагрузить'
};
