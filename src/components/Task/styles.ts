import { StyleSheet } from 'react-native';
import theme from 'utils/theme';

export const styles = StyleSheet.create({
  container: {
    minHeight: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    gap: 16,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: theme.colors.GRAY_400,
  },
  circle: {
    width: 17,
    height: 17,
    borderRadius: 16,
  },
  emptyCircle: {
    borderWidth: 2,
    borderColor: theme.colors.BLUE_LIGHT,
  },
  checkedCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.PURPLE_LIGHT,
  },
  checkIcon: {
    width: 12,
    height: 9,
  },
  text: {
    flex: 1,
    textAlign: 'left',
    color: theme.colors.GRAY_100,
    fontSize: 14,
  },
  textThrough: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: theme.colors.GRAY_300,
  },
  trashIcon: {
    width: 12,
    height: 14,
  },
});
