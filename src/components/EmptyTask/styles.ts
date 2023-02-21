import { StyleSheet } from 'react-native';
import theme from 'utils/theme';

export const styles = StyleSheet.create({
  container: {
    borderColor: theme.colors.GRAY_400,
    borderTopWidth: 1,

    gap: 16,
    paddingTop: 40,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.GRAY_300,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: theme.colors.GRAY_300,
  },
});
