import { StyleSheet } from 'react-native';
import theme from 'utils/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.GRAY_700,
  },
  box: {
    // padding: 24,
    // gap: 24,
    flex: 1,
    backgroundColor: theme.colors.GRAY_600,
  },
  participants: {
    gap: 10,
  },
  participantsContainer: {
    maxHeight: '73%',
  },
  withoutParticipants: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  statics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
});
