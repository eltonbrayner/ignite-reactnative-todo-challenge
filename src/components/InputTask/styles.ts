import { StyleSheet } from 'react-native';
import theme from 'utils/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 4,
    marginHorizontal: 24,
    // marginTop: -16,
  },
  input: {
    flex: 1,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 16,
    padding: 16,
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 5,
    backgroundColor: theme.BLUE_LIGHT,
    justifyContent: 'center',
    alignItems: 'center',
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
});
