import { StyleSheet } from 'react-native';
import theme from 'utils/theme';

export const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginBottom: 20, gap: 8 },
  type: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  valueContainer: {
    backgroundColor: theme.colors.GRAY_400,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },
  value: {
    color: theme.colors.GRAY_200,
    fontWeight: 'bold',
    fontSize: 12,
  },
});
