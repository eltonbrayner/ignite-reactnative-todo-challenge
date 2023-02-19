import { StyleSheet } from 'react-native';
import theme from 'utils/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 4,
    marginHorizontal: 24,
    marginTop: -27,
    marginBottom: 32,
  },
  input: {
    flex: 1,
    height: 54,
    borderRadius: 6,
    backgroundColor: theme.colors.GRAY_500,
    color: theme.colors.GRAY_100,
    fontWeight: '400',
    fontSize: 16,
    padding: 16,
  },
  button: {
    height: 54,
    width: 54,
    borderRadius: 6,
    backgroundColor: theme.colors.BLUE_DARK,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
