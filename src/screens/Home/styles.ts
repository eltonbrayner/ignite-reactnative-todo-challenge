import { StyleSheet } from 'react-native';
import theme from 'utils/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.GRAY_700,
  },
  box: {
    flex: 1,
    backgroundColor: theme.colors.GRAY_600,
  },
  taskList: {
    paddingHorizontal: 24,
  },
  taskListContainer: {
    gap: 10,
  },
  statics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
});
